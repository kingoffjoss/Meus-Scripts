# Pingo flutuante para Android — teste 283.0

Aplicativo nativo com mascote 3D em uma janela `TYPE_APPLICATION_OVERLAY`, acima da tela inicial e de outros apps que permitam sobreposição. Android 8 ou superior, com Android System WebView atualizado e WebGL2.

## Usar

1. Instale o APK de teste no Android. A autorização para instalar e a permissão de sobreposição são feitas pelo próprio usuário.
2. Abra **Pingo flutuante**, toque em **Permitir aparecer sobre outros apps** e ative a permissão nas configurações do Android.
3. Volte ao app e toque em **Ativar Pingo flutuante**. Volte à tela inicial.
4. Arraste o Pingo; toque nele para abrir cuidados, passeio, sono e cores. Para encerrar, use **Fechar Pingo**, **Parar** na notificação ou o botão do app.

O serviço é iniciado somente por ação do usuário enquanto o app está aberto. Há uma notificação de controle. Não inicia no boot, não usa acessibilidade, não lê a tela de outros apps, não grava áudio e não envia dados. O WebView do mascote bloqueia rede; os modelos estão dentro do APK. Conversar com IA abre separadamente o site do Pingo no navegador.

A animação é pausada e o mascote fica oculto quando a tela é bloqueada. O Android ou o fabricante pode encerrar o serviço para economizar bateria. Apps de banco e telas protegidas podem ocultar a sobreposição.

## Compilar

JDK 17, Gradle 8.11.1, Android SDK 35 e Build Tools 35.0.0:

```sh
cd gotinha/android
gradle testDebugUnitTest lintDebug assembleDebug
```

O resultado é `app/build/outputs/apk/debug/app-debug.apk`. É uma versão de teste assinada com chave de depuração; instalações futuras produzidas em outro ambiente podem exigir desinstalar a anterior. Não é uma versão de loja.

O bundle visual é gerado a partir de `gotinha/src/android-overlay.js` e dos componentes originais do Pingo, com Three.js 0.186.1 e esbuild. O arquivo pronto está nos assets; compilar o Android não precisa de Node.

## Validação

Testes de limites de arraste e passeio, análise Android Lint, compilação do APK e teste de inicialização/sobreposição no emulador pelo workflow `Pingo Android`. Validação em celulares reais continua necessária.
