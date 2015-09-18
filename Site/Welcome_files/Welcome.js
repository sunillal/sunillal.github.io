// Created by iWeb 3.0.4 local-build-20140518

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/GraphPaper_01.png'),IWCreateImage('Welcome_files/GraphPaper_02.png'),IWCreateImage('Welcome_files/GraphPaper_01_1.png'),IWCreateImage('Welcome_files/GraphPaper_01_2.png'),IWCreateImage('Welcome_files/GraphPaper_09.png'),IWCreateImage('Welcome_files/GraphPaper_08.png'),IWCreateImage('Welcome_files/GraphPaper_07.png'),IWCreateImage('Welcome_files/GraphPaper_01_3.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Welcome_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),reflection_0:new IWReflection({opacity:0.50,offset:6.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
