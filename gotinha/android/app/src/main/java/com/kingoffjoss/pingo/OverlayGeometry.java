package com.kingoffjoss.pingo;
final class OverlayGeometry {
 static int clamp(int value,int min,int max){return Math.max(min,Math.min(value,Math.max(min,max)));}
 static int nextX(int current,int velocity,int screen,int pet){return clamp(current+velocity,0,screen-pet);}
 static int nextY(int current,int velocity,int screen,int pet){return clamp(current+velocity,0,screen-pet);}
}
