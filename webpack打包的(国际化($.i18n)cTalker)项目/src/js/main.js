$(function(){
    loadProperties('main', './strings/');
    $('#selectLanguage>span').click(function(){
       localStorage.selectLang=$(this).attr('id');
       loadProperties('main', './strings/',$(this).attr('id'));
    })
});
function loadProperties(name, path, lang){
    console.log(localStorage.selectLang==null);
    localStorage.selectLang==null?(lang = lang || navigator.language):(lang=localStorage.selectLang);
    $.i18n.properties({
        name:name, 
        path:path,
        mode:'map',
        language: lang,
        callback: function() {
            $("[data-localize]").each(function() { //each循环
                var els = $(this),
                    localizedValue = $.i18n.map[els.data("localize")];
                // console.log(els); //带有data-localize属性的元素列表
                // console.log(els.data("localize")); //data-localize的属性值
                // console.log(localizedValue); //DOM里的HTML的innerHTML值
                if (els.is("input[type=text]") || els.is("input[type=password]") || els.is("input[type=email]")) {els.attr("placeholder", localizedValue); }
                else if (els.is("input[type=button]") || els.is("input[type=submit]")) {els.attr("value", localizedValue);}
                else if (els.is("a")){els.attr('title',localizedValue);}
                else {els.text(localizedValue);}
            });
        }
    });
    lang=="ZH"||lang=="zh-CN"?($('#ZH').addClass('active'),
        $('#en').removeClass()):($('#en').addClass('active'),
        $('#ZH').removeClass());
    console.log(lang);
}
