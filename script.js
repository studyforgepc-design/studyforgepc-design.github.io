const LANG_KEY="studyforge-language";
const translations={
  ar:{
    navHome:"الرئيسية",navDownload:"تحميل",navUpdates:"التحديثات",navHelp:"المساعدة",lang:"EN",
    homeTitle:"StudyForge — مدير الكورسات المحلية",
    badgeWin:"Windows • v1.0.1",heroTitle:"نظّم كورساتك المحلية",heroSpan:"ببساطة.",
    heroDesc:"StudyForge برنامج Windows بسيط لإدارة وتشغيل فيديوهات الكورسات الموجودة على جهازك، مع حفظ تقدم المشاهدة.",
    download:"تحميل StudyForge",learn:"اعرف المزيد",featuresTitle:"المميزات",
    f1t:"تنظيم محلي",f1p:"أضف مجلدات الكورسات الموجودة على جهازك بسهولة.",
    f2t:"تشغيل مباشر",f2p:"شغّل فيديوهاتك داخل البرنامج بدون تعقيد.",
    f3t:"حفظ التقدم",f3p:"احتفظ بموضع المشاهدة ونسبة إكمال كل فيديو.",
    latest:"أحدث إصدار",current:"الإصدار الحالي",win:"متاح لنظام Windows x64.",downloadShort:"تحميل",
    reasonTitle:"سبب التحديث",reason101:"تم تحسين تجربة مشاهدة الفيديو وإضافة أدوات التحكم مباشرة داخل مشغل الفيديو، لتسهيل التحكم أثناء المشاهدة.",
    previous:"الإصدارات السابقة",downloadOld:"تحميل الإصدار",oldLabel:"إصدار سابق",
    downloadTitle:"تحميل StudyForge",latestRelease:"Latest Release",downloadDesc:"نسخة Windows x64 — الإصدار 1.0.1",
    releaseDesc:"مدير محلي للكورسات والفيديوهات. مجاني ولا يحتاج إلى حساب.",
    li1:"تشغيل الفيديوهات محليًا",li2:"حفظ موضع المشاهدة",li3:"حساب تقدم الكورس",li4:"واجهة عربية وإنجليزية",
    note:"سيتم تحميل ملف التثبيت الرسمي مباشرة من GitHub.",
    updatesTitle:"التحديثات",updatesDesc:"آخر أخبار وإصدارات البرنامج.",
    update101Title:"تحسين تجربة مشاهدة الفيديو",update101Reason:"تم تحسين تجربة مشاهدة الفيديو وإضافة أدوات التحكم مباشرة داخل مشغل الفيديو، لتسهيل التحكم أثناء المشاهدة.",
    update100Title:"الإصدار السابق",update100Reason:"الإصدار الأول من StudyForge.",
    helpTitle:"المساعدة",helpDesc:"إجابات سريعة لأكثر المشاكل شيوعًا.",
    q1:"كيف أضيف كورسًا؟",a1:"افتح StudyForge واضغط إضافة كورس، ثم اختر مجلد الكورس على جهازك.",
    q2:"هل ملفاتي تذهب إلى الإنترنت؟",a2:"StudyForge مصمم ليعمل محليًا؛ ملفات الفيديو ومساراتها وتقدم المشاهدة لا تحتاج إلى رفعها إلى خادم خارجي.",
    q3:"وجدت مشكلة، ماذا أفعل؟",a3:"أرسل وصف المشكلة وصورة لها إلى بريد دعم StudyForge، وسنراجع المشكلة ونساعدك قدر الإمكان.",
    support:"تواصل مع الدعم",supportText:"للاستفسارات أو الإبلاغ عن مشكلة، تواصل معنا عبر البريد الإلكتروني:",
    footerHelp:"المساعدة"
  },
  en:{
    navHome:"Home",navDownload:"Download",navUpdates:"Updates",navHelp:"Help",lang:"AR",
    homeTitle:"StudyForge — Local Course Manager",
    badgeWin:"Windows • v1.0.1",heroTitle:"Organize your local courses",heroSpan:"simply.",
    heroDesc:"StudyForge is a simple Windows app for managing and playing course videos stored on your device, with saved watch progress.",
    download:"Download StudyForge",learn:"Learn more",featuresTitle:"Features",
    f1t:"Local organization",f1p:"Easily add course folders stored on your device.",
    f2t:"Direct playback",f2p:"Play your videos inside the app without the hassle.",
    f3t:"Progress saving",f3p:"Keep your watch position and completion percentage for each video.",
    latest:"Latest release",current:"Current release",win:"Available for Windows x64.",downloadShort:"Download",
    reasonTitle:"Reason for the update",reason101:"The video-watching experience was improved by adding controls directly inside the video player, making playback easier to control while watching.",
    previous:"Previous releases",downloadOld:"Download version",oldLabel:"Previous release",
    downloadTitle:"Download StudyForge",latestRelease:"Latest Release",downloadDesc:"Windows x64 — version 1.0.1",
    releaseDesc:"A local course and video manager. Free and no account required.",
    li1:"Local video playback",li2:"Saved watch position",li3:"Course progress tracking",li4:"Arabic and English interface",
    note:"The official installer will be downloaded directly from GitHub.",
    updatesTitle:"Updates",updatesDesc:"Latest StudyForge releases and changes.",
    update101Title:"Video watching experience improvements",update101Reason:"The video-watching experience was improved by adding controls directly inside the video player, making playback easier to control while watching.",
    update100Title:"Previous release",update100Reason:"The first StudyForge release.",
    helpTitle:"Help",helpDesc:"Quick answers to common questions.",
    q1:"How do I add a course?",a1:"Open StudyForge, click Add Course, then choose the course folder on your device.",
    q2:"Do my files go to the internet?",a2:"StudyForge is designed to work locally; your video files, paths, and watch progress do not need to be uploaded to an external server.",
    q3:"I found a problem. What should I do?",a3:"Send a description and screenshot of the problem to StudyForge support, and we will review it and help as much as we can.",
    support:"Contact support",supportText:"For questions or problem reports, contact us by email:",
    footerHelp:"Help"
  }
};
function applyLang(lang){
  const t=translations[lang]||translations.ar;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.dir=document.documentElement.dir;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(Object.prototype.hasOwnProperty.call(t,key)) el.textContent=t[key];
  });

  const langBtn=document.getElementById("lang");
  if(langBtn){
    langBtn.textContent=t.lang;
    langBtn.setAttribute("aria-label", lang==="ar" ? "Switch to English" : "التبديل إلى العربية");
  }

  const titleKey=document.body.dataset.titleKey;
  if(titleKey && t[titleKey]) document.title=t[titleKey];
  localStorage.setItem(LANG_KEY,lang);
}

document.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem(LANG_KEY);
  applyLang(saved || (document.documentElement.lang==="en"?"en":"ar"));
  const btn=document.getElementById("lang");
  if(btn) btn.addEventListener("click",()=>applyLang(document.documentElement.lang==="ar"?"en":"ar"));
});
