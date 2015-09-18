// Created by iWeb 3.0.4 local-build-20140518

function createMediaStream_id1()
{return IWCreatePhotocast("http://eva.ie.u-ryukyu.ac.jp/%7Esunil/Site/Personal_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://eva.ie.u-ryukyu.ac.jp/%7Esunil/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://eva.ie.u-ryukyu.ac.jp/%7Esunil/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(164,164),new IWSize(164,28),new IWSize(197,207),27,27,0,new IWSize(0,0)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-4,5,8,62),url:'Personal_files/stroke.png'},{rect:new IWRect(-7,-5,11,10),url:'Personal_files/stroke_1.png'},{rect:new IWRect(4,-5,595,10),url:'Personal_files/stroke_2.png'},{rect:new IWRect(599,-7,9,12),url:'Personal_files/stroke_3.png'},{rect:new IWRect(599,5,7,62),url:'Personal_files/stroke_4.png'},{rect:new IWRect(599,67,9,7),url:'Personal_files/stroke_5.png'},{rect:new IWRect(4,67,595,7),url:'Personal_files/stroke_6.png'},{rect:new IWRect(-6,67,10,5),url:'Personal_files/stroke_7.png'}],new IWSize(604,71))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Personal_files/PersonalMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
