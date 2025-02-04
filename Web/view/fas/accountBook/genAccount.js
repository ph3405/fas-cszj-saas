layui.config({
    base: "js/"
}).use(['form', 'layer', 'jquery', 'laypage', 'jqExt', 'JsRender'], function () {
    var form = layui.form(),
		layer = layui.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

    var num
      , periodId
      , account
    , queryType = 'normal'
        , pageIndex = 1;//账套

    function GetAllYear(list) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            if (i == 0) arr.push({ Year: list[i].Year, IsActive: 0 });
            b = false;
            if (arr.length > 0 && i > 0) {
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j].Year == list[i].Year) {
                        b = true;
                        //break;
                    }
                }
                if (!b) {
                    arr.push({ Year: list[i].Year, IsActive: 0 });
                }
            }
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < list.length; j++) {
                if (list[j].IsActive == 1 && arr[i].Year == list[j].Year) {
                    arr[i].IsActive = list[j].IsActive;
                }
            }
        }
        return arr;
    }
    var ActiveYear;//激活的年份
    var allPeriod = [];//所有期间集合
    function GetActiveYear(list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].IsActive == 1)
                ActiveYear = list[i].Year;

        }
    }
    function GetMonth(list) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].Year == ActiveYear)
                arr.push({ Month: list[i].Month, IsActive: 0, Id: list[i].Id });
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < list.length; j++) {
                if (list[j].IsActive == 1 && arr[i].Month == list[j].Month) {
                    arr[i].IsActive = list[j].IsActive;
                }
            }
        }
        return arr;
    }

    var query = function () {
        queryType = "normal";
        var index = $.loading('查询中');
        var request = {};

        request.Type = queryType;
        request.PeriodId = periodId;

        request.Token = token;
        request.PageIndex = pageIndex;
        request.PageSize = 10;
        send(request, index);
    };
    var queryMore = function () {
        queryType = "more";
        var index = $.loading('查询中');
        request = {};
        request.More = {};
        request.More.Period_S = _data.field.selMonthS;
        request.More.Period_E = _data.field.selMonthE;

        request.More.Code_S = _data.field.codeS;
        request.More.Code_E = _data.field.codeE;
        request.Type = queryType;//更多筛选
        request.Token = token;
        request.PageIndex = pageIndex;
        request.PageSize = 10;
        send(request, index);
    }
    var send = function (request,index) {

        $.Post("/fas/accountBook/GenAccountListSearch", request,
            function (data) {
                var res = data;
                if (res.IsSuccess) {

                    var type = 0;
                    var tplList = '#tpl-list2';
                    var tplHead = '#tpl-head';
                    if (num == true) {
                        tplList = '#tpl-list';
                        type = 1;
                    }

                    var templateHead = $.templates(tplHead);

                    var headHtml = templateHead.render({ type: type });

                    $('#tbHead').html(headHtml);


                    var template = $.templates(tplList);

                    var html1 = template.render(res.Data);
                    printData = res.Data;
                    $('#dt1').html(html1);
                    $('.layui-search-mored').hide();
                    laypage({
                        curr: pageIndex,
                        cont: "page",
                        pages: Math.ceil(res.Total / request.PageSize),
                        jump: function (obj, first) {
                            if (!first) {
                                pageIndex = obj.curr;
                                if (queryType == "normal") {

                                    query();
                                }
                                else {
                                    queryMore();
                                }
                            }
                        }
                    });

                    form.render();
                } else {
                    $.warning(res.Message);
                }
                layer.close(index);
            }, function (err) {
                $.warning(err.Message);
                layer.close(index);
            });
    }
 
    var Init = function () {

        var index = $.loading('初始化');
        var request = {};

        request.Token = token;

        $.Post("/fas/period/PeriodPaidGet", request,
            function (data) {
                var res = data;
                if (res.IsSuccess) {


                    var template = $.templates("#tpl-select");
                    
                    var dataHtml = template.render(res.Data);
                    account = res.Account.QY_Name;
                    $('#selPeriod').append(dataHtml);
                    var template_Year = $.templates("#tpl-Year");
                    var template_Month = $.templates("#tpl-Month");
                    allPeriod = res.Data;
                    var lstYear = GetAllYear(res.Data);
                    var dataHtml_Year = template_Year.render(lstYear);

                    $('#selYearS').html(dataHtml_Year);
                    $('#selYearE').html(dataHtml_Year);
                    GetActiveYear(res.Data);//获取当前激活的年份

                    var lstMonth = GetMonth(res.Data);

                    var dataHtml_Month = template_Month.render(lstMonth);

                    $('#selMonthS').html(dataHtml_Month);
                    $('#selMonthE').html(dataHtml_Month);
          
                    //if (dataHtml != '') {
                    //    $('#selPeriodS').html(dataHtml);
                    //    $('#selPeriodE').html(dataHtml);
                    //}
                    form.render();
                } else {
                    $.warning(res.Message);
                }
                layer.close(index);
            }, function (err) {
                $.warning(err.Message);
                layer.close(index);
            });
        $.Post("/fas/set/GetSubject", request,
            function (data) {
                var res = data;
                layer.close(index);
                if (!res.IsSuccess) {
                    $.warning(res.Message);
                }
                else {
                    bindAutocomplete($("[name='codeS']"), $("[name='codeE']"), res.Data);
                    $.topTip(res.Message);
                }


            }, function (err) {

                layer.close(index);
                $.warning(err.Message);
            });
    };
    var bindAutocomplete = function (codeS, codeE, data) {
        $(codeS).autocomplete({
            source: data,
            select: function (event, ui) {
                $(this).val(ui.item.Id);
            }
        })

        $(codeE).autocomplete({
            source: data,
            select: function (event, ui) {
                $(this).val(ui.item.Id);
            }
        })
    };
    Init();//初始化期间
    form.on('select(selYearS)', function (data) {
        var year = $('#selYearS').val();
        var arr = [];
        for (var i = 0; i < allPeriod.length; i++) {
            if (allPeriod[i].Year == year)
                arr.push({ Month: allPeriod[i].Month, IsActive: 0, Id: allPeriod[i].Id });
        }
        if (ActiveYear == year) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < allPeriod.length; j++) {
                    if (allPeriod[j].IsActive == 1 && arr[i].Month == allPeriod[j].Month) {
                        arr[i].IsActive = allPeriod[j].IsActive;
                    }
                }
            }
        }
        var template_Month = $.templates("#tpl-Month");
        var dataHtml_Month = template_Month.render(arr);
        if (dataHtml_Month == "") {
            dataHtml_Month = "<option value=''></option>";
        }
        $('#selMonthS').html(dataHtml_Month);
        form.render('select');
    });
    form.on('select(selYearE)', function (data) {
        var year = $('#selYearE').val();
        var arr = [];
        for (var i = 0; i < allPeriod.length; i++) {
            if (allPeriod[i].Year == year)
                arr.push({ Month: allPeriod[i].Month, IsActive: 0, Id: allPeriod[i].Id });
        }
        if (ActiveYear == year) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < allPeriod.length; j++) {
                    if (allPeriod[j].IsActive == 1 && arr[i].Month == allPeriod[j].Month) {
                        arr[i].IsActive = allPeriod[j].IsActive;
                    }
                }
            }
        }
        var template_Month = $.templates("#tpl-Month");
        var dataHtml_Month = template_Month.render(arr);
        if (dataHtml_Month == "") {
            dataHtml_Month = "<option value=''></option>";
        }
        $('#selMonthE').html(dataHtml_Month);
        form.render('select');
    });
    form.on('checkbox()', function (data) {
        num = data.elem.checked;

    });
    form.on("submit(search)", function (data) {
        pageIndex = 1;
        _data = data;
        queryMore();
        return false;
    });
    $("#btnSearch").click(function () {
        periodId = $('#selPeriod').val();

        if (periodId != '') {
            pageIndex = 1;
            query();
        }

    })

    //操作
    $("body").on("click", ".row-link", function () {  // 
        var subjectCode = $(this).attr('data-code');
        var periodId_S = $('#selMonthS').val();
        var periodId_E = $('#selMonthE').val();
        var selYearS = $('#selYearS').val();
        var selYearE = $('#selYearE').val();
        var selMonthS = $('#selMonthS option:selected').text();
        var selMonthE = $('#selMonthE option:selected').text();
        //$(this).attr('data-url', '/view/fas/accountbook/detailAccount.aspx?subjectCode=' + subjectCode + "&periodId=" + periodId);
        $(this).attr('data-url', '/view/fas/accountbook/detailAccount.aspx?subjectCode=' + subjectCode + "&periodId_S=" + periodId_S + "&periodId_E=" + periodId_E + "&selYearS=" + selYearS + "&selYearE=" + selYearE + "&selMonthS=" + selMonthS + "&selMonthE=" + selMonthE);
        window.parent.addTab($(this));

    })

    function CurentTime() {
        var now = new Date();

        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日

        var clock = year + "-";

        if (month < 10)
            clock += "0";

        clock += month + "-";
        if (day < 10)
            clock += "0";

        clock += day;
        return (clock);
    }

    function CreateOneFormPage() {
        LODOP = getLodop();
        LODOP.PRINT_INIT("明细账打印");

        var template = $.templates("#tpl-print");
        LODOP.SET_PREVIEW_WINDOW(2, 2, 0, -1, -1
        , '预览查看.开始打印');

        //Auto-Width 整宽高度会按比例缩放Full-Width
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Width:85%");

        var periodEle = $($('#selPeriod').find('option:selected')[0]);
        var periodTitle = $(periodEle).attr('data-title');




        var period = periodTitle;
        var unit = '元';
        var company = account;
        var printDate = CurentTime();
        var items = printData;


        for (var i = 0; i < items.length; i++) {
            LODOP.NewPage();
            items[i].Period = period;
            items[i].Unit = unit;
            items[i].Company = company;
            items[i].PrintDate = printDate;

            for (var j = 0; j < items[i].Data.length; j++) {
                items[i].Data[j].Period = period;
            }

            dataHtml = template.render(items[i]);

            LODOP.ADD_PRINT_HTM(10, 10, '100%', '100%', dataHtml);
        }

    };

    var LODOP;
    var html = "";//打印生成的HTML
    var nowPeriod = "";//期别
    $('#btnPrint').click(function () {
        //if (printData == undefined || printData == null) {
        //    $.warning('请先查出您要打印的数据');
        //    return;
        //}
        //CreateOneFormPage();
        //LODOP.PREVIEW();
        if ($('#selMonthS').val() == $("#selMonthE").val()) {
            nowPeriod = $('#selYearS').val() + "年" + $('#selMonthS option:selected').text() + "期";
        }
        else {
            nowPeriod = $('#selYearS').val() + "年" + $('#selMonthS option:selected').text() + "期" + "-" + $('#selYearE').val() + "年" + $('#selMonthE option:selected').text() + "期"
        }
        var request = {};
        request.Token = token;
        request.PageIndex = 1;
        request.PageSize = 9999;
        request.More = {};

        request.More.Period_S = $('#selMonthS').val();
        request.More.Period_E = $("#selMonthE").val();

        request.More.Code_S = $("[name='codeS']").val();
        request.More.Code_E = $("[name='codeE']").val();
        request.Type = "more";
        var index = $.loading('打印获取数据');
        $.Post("/fas/accountBook/GenAccountListSearch", request,
            function (data) {
                var res = data;
                if (res.IsSuccess) {
                    LODOP = getLodop();
                    LODOP.PRINT_INIT("总账打印");
                    //LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
                    LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Width:100%");
                    LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");
                    GetZZHtml(data);
                    LODOP.PREVIEW();
                } else {

                }
                layer.close(index);
            }, function (err) {
                layer.close(index);
            });
    });
    //获取总账打印页面
    function GetZZHtml(saveData) {
        if (saveData != undefined && saveData.Data.length > 0) {
            var htmlStyle =
                "<style>body {text-align: center;} .tbZZ td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "border-top: 1px solid #808080;" +
                "border-left: 1px solid #808080;" +
                "}" +

                ".tbZZ tr {" +
                "height: 30px;" +
                "}" +

                ".tbZZ thead {" +
                " font-size: 14px;font-family:'黑体'" +
                "}" +

                ".tbZZ tbody, .tbZZ tfoot {" +
                "font-size: 12px;font-family:'黑体' " +
                "}</style>";
            var count = 0;
            for (var i = 0; i < saveData.Data.length; i++) {
                var htmlHead = "";
                //var htmlHead = "<table style='width: 90%;margin: 0 auto;'>" +
                //    "<tr style='height: 30px;'>" +
                //    "<td  colspan='3' style='font-size:20px;text-align:center;font-weight:400'> " + saveData.Data[i].Name + "总账</td>" +
                //    "</tr>" +
                //    "<tr style='height: 30px;'>" +
                //    "<td style='font-size: 12px; width: 33.3333%' >编制单位：" + account + "</td >" +
                //    "<td style='font-size:12px;text-align:center;'>" + nowPeriod + "</td>" +
                //    "<td style='font-size:12px;width:33.3333%;text-align:right'>单位：元</td>" +
                //    "</tr>" +
                //    "</table >";
                var htmlTbl =
                    "<table class='tbZZ' style='width: 90%;margin: 0 auto;' cellspacing='0' cellpadding='0'>" +
                    "<thead>" +
                    "<tr style='height: 30px;border:0px'>" +
                    "<td colspan='8' style='font-size:20px;text-align:center;font-weight:400;border:0px'>" + saveData.Data[i].Name + "总账</td>" +
                    "</tr>" +
                    "<tr style='height: 30px; '>" +
                    "<td colspan='2' style='font-size: 12px;border:0px' >编制单位：" + account + "</td >" +
                    "<td colspan='2' style='font-size:text-align:center; 12px;border:0px'>" + nowPeriod + "</td>" +
                    "<td  colspan='4'  style='font-size: 12px;  text-align: right;border:0px'>单位：元</td>" +
                    "</tr > " +
                    "<tr>" +
                    "<td style='text-align: center; width: 10%'>科目编码</td>" +
                    "<td style='text-align: center; width: 29%'> 科目名称</td >" +
                    "<td style='text-align: center; width: 11%'> 期间</td > " +
                    "<td style='text-align: center; width: 15%'> 摘要</td > " +
                    "<td style='text-align: center; width: 10%'> 借方金额</td > " +
                    "<td style='text-align: center; width: 10%'> 贷方金额</td > " +
                    "<td style='text-align: center; width: 5%'> 方向</td > " +
                    "<td style='text-align: center; width: 10%;'>余额</td>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";
                var htmlDetail = "";
                for (var j = 0; j < saveData.Data[i].Data.length; j++) {
                    var Money1 = saveData.Data[i].Data[j].Money1 == 0 ? "" : saveData.Data[i].Data[j].Money1;
                    var Money2 = saveData.Data[i].Data[j].Money2 == 0 ? "" : saveData.Data[i].Data[j].Money2;
                    var Show_Credit_Debit = saveData.Data[i].Data[j].Show_Credit_Debit == 0 ? "借" : "贷";
                    var Show_Money = saveData.Data[i].Data[j].Show_Money == 0 ? "" : saveData.Data[i].Data[j].Show_Money;
                    htmlDetail += "<tr>" +
                        "<td style='text-align: center'>" + saveData.Data[i].Data[j].SubjectCode + "</td>" +
                        "<td style='text-align: center'>" + saveData.Data[i].Data[j].Name + "</td >" +
                        "<td style='text-align: center'>" + saveData.Data[i].Data[j].Period + "</td>" +
                        "<td style='text-align:left'>" + saveData.Data[i].Data[j].Summary + "</td > " +
                        "<td style='text-align :right'>" + Money1 + "</td>" +
                        "<td style='text-align:right;'>" + Money2 + " </td>" +
                        "<td style='text-align: center'>" + Show_Credit_Debit + "</td>" +
                        "<td style='text-align: right;'>" + Show_Money + "</td>" +
                        "</tr>";
                }
                htmlDetail += "</tbody>" +
                    "<tfoot>" +
                    "<tr>" +
                    "<td  colspan='4' style='border: 0px solid #000000;'></td>" +
                    "<td style='text-align: right;border: 0px solid #000000;' colspan='2'>打印日期：" + CurentTime() + "</td>" +
                    "<td style='text-align: right;border: 0px solid #000000;' colspan='2'>【章小算财税】</td>" +
                    "</tr>" +
                    "</tfoot></table>";
                count++;
                //var pageHtml = "<p style='page-break-after: always;'></p>";
                //html += htmlHead + htmlDetail + htmlSum + htmlFoot;
                //LODOP.NEWPAGEA();
                //LODOP.ADD_PRINT_HTML('5mm', 0, '100%', '100%', htmlStyle + htmlHead);
                LODOP.ADD_PRINT_TABLE(10, 0, '100%', '100%', htmlStyle + htmlTbl + htmlDetail);
                LODOP.ADD_PRINT_TEXT(15, '85%', 300, 100, "第#页/共&页");
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 2);
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
                if (saveData.Data.length > 1 && i < saveData.Data.length - 1) {
                    //html += "<p style='page-break-after: always;'></p>";
                    LODOP.NEWPAGE();
                }
            }
        }
    }
    //更多筛选
    $('#btnMore').click(function () {
        var offset = $("#btnMore").offset();
        $(".layui-search-mored").css("position", "abosolute").css("left", offset.left + "px").css("top", offset.top + 38 + "px");
        $('.layui-search-mored').toggle();
    });

    $('#btnCancel').click(function () {
        $('.layui-search-mored').hide();
    });
    window.query = query;
})