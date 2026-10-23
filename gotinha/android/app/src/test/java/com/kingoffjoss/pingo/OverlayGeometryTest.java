package com.kingoffjoss.pingo;
import org.junit.Test;import static org.junit.Assert.*;
public class OverlayGeometryTest {
 @Test public void dragAndWalkStayOnScreen(){for(int width:new int[]{320,1080,2400})for(int delta:new int[]{-5000,-1,0,1,5000}){int x=OverlayGeometry.nextX(width/2,delta,width,240);assertTrue(x>=0);assertTrue(x+240<=width);}}
 @Test public void smallLandscapeAndKeyboardAreaRemainReachable(){assertEquals(0,OverlayGeometry.nextY(300,500,200,240));assertEquals(0,OverlayGeometry.clamp(-100,0,800));assertEquals(800,OverlayGeometry.clamp(2000,0,800));}
}
