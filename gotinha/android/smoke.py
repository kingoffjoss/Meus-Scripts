import subprocess, time, xml.etree.ElementTree as ET, re, pathlib
def adb(*args):
    return subprocess.check_output(['adb', *args], text=True, timeout=60)
package='com.kingoffjoss.pingo'
adb('shell','wm','size','540x960')
adb('shell','wm','density','240')
adb('install','-r','app/build/outputs/apk/debug/app-debug.apk')
adb('shell','appops','set',package,'SYSTEM_ALERT_WINDOW','allow')
adb('logcat','-c')
adb('shell','am','start','-W','-n',package+'/.MainActivity')
time.sleep(3)
adb('shell','uiautomator','dump','/sdcard/pingo-window.xml')
xml=adb('shell','cat','/sdcard/pingo-window.xml')
node=next(n for n in ET.fromstring(xml).iter('node') if n.attrib.get('text')=='2. Ativar Pingo flutuante')
bounds=list(map(int,re.findall(r'\d+',node.attrib['bounds'])))
adb('shell','input','tap',str((bounds[0]+bounds[2])//2),str((bounds[1]+bounds[3])//2))
pathlib.Path('smoke-results').mkdir(exist_ok=True)
startup=''
for attempt in range(60):
    startup=adb('logcat','-d','-s','AndroidRuntime:E','chromium:E','PingoWeb:I','PingoRender:I')
    if re.search(r'"frames":"[1-9]\d*"',startup.replace('\\','')):
        break
    time.sleep(2)
pathlib.Path('smoke-results/startup.txt').write_text(startup)
pathlib.Path('smoke-results/full-logcat.txt').write_text(adb('logcat','-d'))
adb('shell','input','keyevent','KEYCODE_HOME')
time.sleep(3)
services=adb('shell','dumpsys','activity','services',package)
assert 'PingoService' in services and 'isForeground=true' in services, services
windows=adb('shell','dumpsys','window','windows')
assert package in windows, 'Overlay window missing after HOME'
logs=adb('logcat','-d','-s','AndroidRuntime:E','chromium:E','PingoWeb:I','PingoRender:I')
assert 'FATAL EXCEPTION' not in logs, logs
assert 'Uncaught' not in logs, logs
pathlib.Path('smoke-results').mkdir(exist_ok=True)
with open('smoke-results/pingo-home.png','wb') as out:
    subprocess.run(['adb','exec-out','screencap','-p'],stdout=out,check=True)
assert pathlib.Path('smoke-results/pingo-home.png').stat().st_size>1000, 'No screenshot produced'
pathlib.Path('smoke-results/service.txt').write_text(services)
pathlib.Path('smoke-results/webview-log.txt').write_text(logs)
assert 'PingoRender' in logs and 'hardware=true' in logs, logs
rendered=re.search(r'"frames":"(\d+)"',logs.replace('\\',''))
assert rendered and int(rendered.group(1))>0, logs
adb('shell','uiautomator','dump','/sdcard/pingo-touch.xml')
touchxml=adb('shell','cat','/sdcard/pingo-touch.xml')
touchnode=next(n for n in ET.fromstring(touchxml).iter('node') if n.attrib.get('text','').startswith('Oi! Arraste'))
touchbounds=list(map(int,re.findall(r'\d+',touchnode.attrib['bounds'])))
cx,cy=(touchbounds[0]+touchbounds[2])//2,(touchbounds[1]+touchbounds[3])//2
adb('shell','input','swipe',str(cx),str(cy),str(cx-40),str(cy+30),'400')
time.sleep(1)
adb('shell','uiautomator','dump','/sdcard/pingo-moved.xml')
movedxml=adb('shell','cat','/sdcard/pingo-moved.xml')
movednode=next(n for n in ET.fromstring(movedxml).iter('node') if n.attrib.get('text','').startswith('Gostei deste cantinho'))
movedbounds=list(map(int,re.findall(r'\d+',movednode.attrib['bounds'])))
assert movedbounds!=touchbounds, 'Drag did not move overlay'
adb('shell','input','tap',str((movedbounds[0]+movedbounds[2])//2),str((movedbounds[1]+movedbounds[3])//2))
time.sleep(1)
adb('shell','uiautomator','dump','/sdcard/pingo-stop.xml')
stopxml=adb('shell','cat','/sdcard/pingo-stop.xml')
stopnode=next(n for n in ET.fromstring(stopxml).iter('node') if n.attrib.get('text')=='Fechar Pingo')
stopbounds=list(map(int,re.findall(r'\d+',stopnode.attrib['bounds'])))
adb('shell','input','tap',str((stopbounds[0]+stopbounds[2])//2),str((stopbounds[1]+stopbounds[3])//2))
time.sleep(1)
assert 'isForeground=true' not in adb('shell','dumpsys','activity','services',package)
print('PASS: foreground service, rendered 3D frames, overlay on HOME, drag, care menu and explicit stop.')
