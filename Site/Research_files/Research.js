// Created by iWeb 3.0.4 local-build-20131003

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="351" height="279" style="height: 279px; left: 267px; position: absolute; top: 393px; width: 351px; z-index: 1; "><param name="src" value="Media/robot.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="351" height="279" style="height: 279px; left: 267px; position: absolute; top: 393px; width: 351px; z-index: 1; "><param name="src" value="Research_files/robot-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/robot.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="351" height="279" data="Media/robot.mov" style="height: 279px; left: 267px; position: absolute; top: 393px; width: 351px; z-index: 1; "><param name="src" value="Media/robot.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_files/ResearchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');adjustLineHeightIfTooBig('id15');adjustFontSizeIfTooBig('id15');adjustLineHeightIfTooBig('id16');adjustFontSizeIfTooBig('id16');adjustLineHeightIfTooBig('id17');adjustFontSizeIfTooBig('id17');adjustLineHeightIfTooBig('id18');adjustFontSizeIfTooBig('id18');adjustLineHeightIfTooBig('id19');adjustFontSizeIfTooBig('id19');adjustLineHeightIfTooBig('id20');adjustFontSizeIfTooBig('id20');adjustLineHeightIfTooBig('id21');adjustFontSizeIfTooBig('id21');adjustLineHeightIfTooBig('id22');adjustFontSizeIfTooBig('id22');adjustLineHeightIfTooBig('id23');adjustFontSizeIfTooBig('id23');adjustLineHeightIfTooBig('id24');adjustFontSizeIfTooBig('id24');adjustLineHeightIfTooBig('id25');adjustFontSizeIfTooBig('id25');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
