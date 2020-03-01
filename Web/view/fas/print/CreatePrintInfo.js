﻿layui.config({
    base: "/layui/lay/modules/"
}).use(['form', 'layer', 'jquery', 'laypage', 'jqExt', 'JsRender'], function () {
    var form = layui.form(),
        layer = layui.layer,
        laypage = layui.laypage,
        $ = layui.jquery;
    var request;
    var saveData; //保存查询的数据
    var html = "";//打印生成的HTML
    var htmlStyle = "";//打印生成的HTML样式
    var AreaIndex = 0;
    function GetPrint(arrCheckType) {
        var html = "";
        html = arrCheckType;
        return html;
    }
    //$(document).ready(function () {

    //    var Period_S = $.getQueryString('Period_S');
    //    var Period_E = $.getQueryString('Period_E');
    //    var Token = $.getQueryString('Token');
    //    var PageIndex = $.getQueryString('PageIndex');
    //    var PageSize = $.getQueryString('PageSize');
    //    var arrCheckType = $.getQueryString('arrCheckType');//勾选需要打印的参数
    //    var Account = $.getQueryString('AccountList');//选择的账套
    //    var AccountList = "(";//账套
    //    var arrAccount = Account.split(',');
    //    for (var i = 0; i < arrAccount.length; i++) {
    //        if (i == 0) {
    //            AccountList += "'" + arrAccount[i] + "'";
    //        }
    //        else {
    //            AccountList += ",'" + arrAccount[i] + "'";
    //        }

    //    }
    //    AccountList += ")";
    //    var checkType = arrCheckType.split(',');
    //    for (var i = 0; i < checkType.length; i++) {
    //        //alert(checkType[i]);
    //        if (checkType[i] == "PZ") {
    //            //打印凭证

    //            var MorePZZ = $.getQueryString('MorePZZ');
    //            var MorePZZ_S = $.getQueryString('MorePZZ_S');
    //            var MorePZZ_E = $.getQueryString('MorePZZ_E');
    //            request = {};
    //            request.Type = "more";
    //            request.Token = Token;
    //            request.PageIndex = PageIndex;
    //            request.PageSize = PageSize;
    //            request.More = {};
    //            request.More.Period_S = Period_S;
    //            request.More.Period_E = Period_E;
    //            request.More.PZZ = MorePZZ;
    //            request.More.PZZ_S = MorePZZ_S;
    //            request.More.PZZ_E = MorePZZ_E;
    //            request.AccountList = AccountList;
    //            $.PostTonBu("/fas/doc/DocListSearch", request,
    //                function (data) {
    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        //saveData = data;
    //                        GetPZHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "PZFJ") {
    //            //打印凭证附件
    //            request = {};
    //            request.Token = Token;
    //            request.More = {};
    //            request.More.Period_S = Period_S;
    //            request.More.Period_E = Period_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/doc/DocAttachment", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {

    //                        GetPZFJHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });

    //        }
    //        if (checkType[i] == "KM") {
    //            //打印科目余额
    //            var KM_MoreCode_S = $.getQueryString('KM_MoreCode_S');
    //            var KM_MoreCode_E = $.getQueryString('KM_MoreCode_E');
    //            request = {};
    //            request.Type = "more";
    //            request.Token = Token;
    //            request.PageIndex = PageIndex;
    //            request.PageSize = PageSize;
    //            request.More = {};
    //            request.More.Period_S = Period_S;
    //            request.More.Period_E = Period_E;
    //            request.More.Code_S = KM_MoreCode_S;
    //            request.More.Code_E = KM_MoreCode_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/accountBook/BalAccountListSearch", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetKMHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "MX") {
    //            //打印明细账
    //            var MoreCode_S = $.getQueryString('MoreCode_S');
    //            var MoreCode_E = $.getQueryString('MoreCode_E');
    //            request = {};
    //            request.Type = "more";
    //            request.Token = Token;
    //            request.PageIndex = PageIndex;
    //            request.PageSize = PageSize;
    //            request.More = {};
    //            request.More.Period_S = Period_S;
    //            request.More.Period_E = Period_E;
    //            request.More.Code_S = MoreCode_S;
    //            request.More.Code_E = MoreCode_E;
    //            request.AccountList = AccountList;
    //            $.PostTonBu("/fas/accountBook/DetailListSearch", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetMXHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "ZZ") {
    //            //打印总账
    //            var ZZ_MoreCode_S = $.getQueryString('ZZ_MoreCode_S');
    //            var ZZ_MoreCode_E = $.getQueryString('ZZ_MoreCode_E');
    //            request = {};
    //            request.Type = "more";
    //            request.Token = Token;
    //            request.PageIndex = PageIndex;
    //            request.PageSize = PageSize;
    //            request.More = {};
    //            request.More.Period_S = Period_S;
    //            request.More.Period_E = Period_E;
    //            request.More.Code_S = ZZ_MoreCode_S;
    //            request.More.Code_E = ZZ_MoreCode_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/accountBook/GenAccountListSearch", request,
    //                function (data) {
    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetZZHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "ZCFZ") {
    //            //打印资产负债表
    //            request = {};
    //            request.Token = Token;
    //            request.Period_S = Period_S;
    //            request.Period_E = Period_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/report/PrintZCFZ", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetZCFZHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "LR") {
    //            //打印利润表
    //            request = {};
    //            request.Token = Token;
    //            request.Period_S = Period_S;
    //            request.Period_E = Period_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/report/LRGet", request,
    //                function (data) {
    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetLRHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "JY") {
    //            //打印经营报表
    //            request = {};
    //            request.Token = Token;
    //            //request.Period_S = Period_S;
    //            //request.Period_E = Period_E;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/report/JYGet", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetJYHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //        if (checkType[i] == "SJ") {
    //            //打印税金报表
    //            request = {};
    //            request.Token = Token;
    //            request.AccountList = arrAccount[0];
    //            $.PostTonBu("/fas/report/SJGet", request,
    //                function (data) {

    //                    var res = data;
    //                    if (res.IsSuccess) {
    //                        GetSJHtml(data);
    //                        html += "<p style='page-break-after: always;'></p>";
    //                    } else {

    //                    }
    //                }, function (err) {

    //                });
    //        }
    //    }
    //    if (checkType.length > 0) {
    //        PrintHtml();
    //    }


    //});

    //最终打印
    function PrintHtml() {
        var str = '<!DOCTYPE html>';
        str += '<html>';
        str += '<head>';
        str += '<meta charset="utf-8">';
        str += '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';
        str += '<style>';
        str += htmlStyle;
        str += '</style>';
        str += '</head>';
        str += '<body>';
        str += html;
        str += '</body>';
        str += '</html>';
        window.document.body.innerHTML = str;

        var t_img; // 定时器
        var isLoad = true; // 控制变量（判断图片是否 加载完成）

        isImgLoad(function () {//判断全部打印图片加载完成
            window.print();
            // 加载完成
        });

        //判断图片加载的函数
        function isImgLoad(callback) {
            // 查找所有打印图，迭代处理
            $('img').each(function () {
                // 找到为0就将isLoad设为false，并退出each
                if (this.height === 0) {
                    isLoad = false;
                    return false;
                }
            });
            // 为true，没有发现为0的。加载完毕
            if (isLoad) {
                clearTimeout(t_img); // 清除定时器
                // 回调函数
                callback();
                // 为false，因为找到了没有加载完成的图，将调用定时器递归
            } else {
                isLoad = true;
                t_img = setTimeout(function () {
                    isImgLoad(callback); // 递归扫描
                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
            }
        }
        // window.print();
    }

    //获取凭证打印页面
    function GetPZHtml(saveData) {
        //var row_index = 17;
        if (saveData != undefined && saveData.Data.length > 0) {
            htmlStyle +=
                ".tbPZ td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                ".tbPZ tr {" +
                "height: 55px;" +
                "}" +

                ".tbPZ thead {" +
                " font-size: 14px;" +
                "}" +

                ".tbPZ tbody, .tbPZ tfoot {" +
                "font-size: 12px; " +
                "}" +
                ".A4 {   " +
                " page -break-before: auto; " +
                "page -break-after: always; " +
                "} ";
            var count = 0;
            for (var i = 0; i < saveData.Data.length; i++) {

                var AMT_DBT = digitUppercase(saveData.Data[i].Head["AMT_DBT"]);
                //var AMT_DBT = saveData.Data[i].Head["AMT_DBT"];
                var htmlHead = "<table style='width:100%;'>" +
                    "<tr>" +
                    "<td style='width:33.3333%'></td>" +
                    "<td style='font-size:20px;text-align:center;font-weight:400'> " + saveData.Data[i].Head["PZZName"] + "账凭证</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'>附单据数：  " + saveData.Data[i].Head["AttachmentCount"] + "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td style='font-size:12px;width:33.3333%'>核算单位： " + saveData.AccountName + "</td>" +
                    "<td style='font-size:12px;text-align:center;'>日期：  " + saveData.Data[i].Head["PZDate"].split('T')[0] + "</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'>凭证号：  " + saveData.Data[i].Head["PZZName"] + " - " + saveData.Data[i].Head["PZZNO"] + "</td>" +
                    "</tr>" +
                    "</table >" +
                    "<table class='tbPZ' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                    "<thead style='display: table-header-group'>" +
                    "<tr>" +
                    "<td style='text-align:center;width:30%'>摘要</td>" +
                    "<td style='text-align :center;width:30%'>科目</td>" +
                    "<td style='text-align:center;width:20%;'>借方金额</td>" +
                    "<td style='text-align:center;width:20%;border-right:none'>贷方金额</td>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";
                var htmlDetail = "";
                var htmlSum = "</tbody>" +
                    "<tfoot  style='display: table-footer-group'>" +
                    "<tr>" +
                    "<td style='text-align:left;border-bottom:none' colspan='2'>合计: " + AMT_DBT + "</td>" +

                    "<td style='text-align:right;padding-right:10px;border-bottom:none'> " + saveData.Data[i].Head["AMT_DBT"] + " </td>" +
                    "<td style='text-align:right;padding-right:10px;border:none'> " + saveData.Data[i].Head["AMT_DBT"] + " </td>" +
                    "</tr>" +
                    "</tfoot>" +

                    "</table>";

                var htmlFoot = "<table style='width:100%;font-size:12px;height:40px;'>" +
                    "<tr>" +
                    "<td style='width:20%'>主管：</td>" +
                    "<td style='width:20%'>记账：</td>" +
                    "<td style='width:20%'>审核：</td>" +
                    "<td style='width:20%'>出纳：</td>" +
                    "<td style='width:20%'>制单： " + saveData.Data[i].Head.CreateUser + "</td>" +
                    "</tr>" +
                    "</table>" +
                    "<div style='height:1px'></div>";
                //row_index = row_index - 3;
                //var flag = 0;
                //var row = 0;
                var index = 0;

                //var a = 1 % 2;//1
                //var b = 5 % 2;//1
                //var c = 6 % 2;//0
                //var aa = Math.ceil(1 / 2);//1
                //var bb = Math.ceil(5 / 2);//3
                //var cc = Math.ceil(13 / 2);//7
                var Area = Math.ceil(saveData.Data[i].Detail.length / 5);
                for (var a = 0; a < Area; a++) {

                    if (Area > 1) {
                        var page = a + 1 + "/" + Area;
                        htmlHead = "<table style='width:100%;'>" +
                            "<tr>" +
                            "<td style='width:33.3333%'></td>" +
                            "<td style='font-size:20px;text-align:center;font-weight:400'> " + saveData.Data[i].Head["PZZName"] + "账凭证</td>" +
                            "<td style='font-size:12px;width:33.3333%;text-align:right'>附单据数：  " + saveData.Data[i].Head["AttachmentCount"] + "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='font-size:12px;width:33.3333%'>核算单位： " + saveData.AccountName + "</td>" +
                            "<td style='font-size:12px;text-align:center;'>日期：  " + saveData.Data[i].Head["PZDate"].split('T')[0] + "</td>" +
                            "<td style='font-size:12px;width:33.3333%;text-align:right'>凭证号：  " + saveData.Data[i].Head["PZZName"] + " - " + saveData.Data[i].Head["PZZNO"] + "(" + page + ")" + "</td>" +
                            "</tr>" +
                            "</table >" +
                            "<table class='tbPZ' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                            "<thead style='display: table-header-group'>" +
                            "<tr>" +
                            "<td style='text-align:center;width:30%'>摘要</td>" +
                            "<td style='text-align :center;width:30%'>科目</td>" +
                            "<td style='text-align:center;width:20%;'>借方金额</td>" +
                            "<td style='text-align:center;width:20%;border-right:none'>贷方金额</td>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody>";
                    }
                    AreaIndex++;
                    htmlDetail = "";
                    for (var j = 0; j < 5; j++) {
                        var Summary = "";
                        var SubjectDescription = "";
                        var Money_Debit = "";
                        var Money_Credit = "";
                        try {
                            Summary = saveData.Data[i].Detail[j + index].Summary;
                            SubjectDescription = saveData.Data[i].Detail[j + index].SubjectDescription;
                            Money_Debit = saveData.Data[i].Detail[j + index].Money_Debit;
                            Money_Credit = saveData.Data[i].Detail[j + index].Money_Credit;
                        } catch (e) {

                        }
                        htmlDetail += "<tr>" +
                            "<td style='text-align:left'>" + Summary + "</td > " +
                            "<td style='text-align :left'>" + SubjectDescription + "</td>" +
                            "<td style='text-align:right;padding-right:10px;'>" + Money_Debit + " </td>" +
                            "<td style='text-align:right;padding-right:10px;border-right:none'>" + Money_Credit + "</td>" +
                            "</tr>";


                    }
                    html += htmlHead + htmlDetail + htmlSum + htmlFoot;

                    if (AreaIndex == 2) {
                        AreaIndex = 0;
                        //if (Area > 1 && a <= Area - 1) {
                        //    html += "<p style='page-break-after: always;'></p>";
                        //}
                        //else if (Area==1) {
                        //    html += "<p style='page-break-after: always;'></p>";
                        //}
                        html += "<p style='page-break-after: always;'></p>";
                    }
                    else {
                        html += "<p style='height: 20px;'></p>";
                    }
                    index = index + 5;

                }


            }


            //window.close();

        }
    }

    //获取凭证附件打印页面
    function GetPZFJHtml(saveData) {
        if (saveData != undefined && saveData.ImgUrl.length > 0) {
            var count = 0;
            for (var i = 0; i < saveData.ImgUrl.length; i++) {

                count++;
                var pageHtml = "<p style='page-break-after: always;'></p>";
                var url = "../../.." + saveData.ImgUrl[i];
                html += "<div><img src='" + url + "'/></div>";
                if (count == 2) {
                    //html += pageHtml;
                    count = 0;
                }
            }


            //window.close();

        }
    }


    //获取明细账打印页面
    function GetMXHtml(saveData) {
        if (saveData != undefined && saveData.Data.length > 0) {
            htmlStyle +=
                "#tbMX td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbMX tr {" +
                "height: 60px;" +
                "}" +

                "#tbMX thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbMX tbody, #tbMX tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            var perid = saveData.PrintData[0].Year + "年" + saveData.PrintData[0].Month + "期";

            var htmlHead = "<table style='width: 100%;'>" +
                "<tr>" +
                "<td style='width:33.3333%'></td>" +
                "<td style='font-size:20px;text-align:center;font-weight:400'> 明细账</td>" +
                "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                "</tr>" +
                "<tr style='height: 30px; '>" +
                "<td style='font-size: 12px; width: 33.3333%' ></td >" +
                "<td style='font-size: 12px; text-align: center;' >" + perid + "</td > " +
                "<td style='font-size: 12px; width: 33.3333%; text-align: right' > 单位：元</td > " +
                "</tr > " +
                "</table >" +
                "<table id='tbMX' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                "<thead>" +
                "<tr>" +
                "<td style='text-align: center; width: 12.5%'>日期</td>" +
                "<td style='text-align: center; width: 6.25%'>凭证字号</td>" +
                "<td style='text-align: center; width: 15%'>科目</td>" +
                "<td style='text-align: center; width: 15%'>摘要</td>" +
                "<td style='text-align:center;width:15%;'>借方</td>" +
                "<td style='text-align:center;width:15%;'>贷方</td>" +
                "<td style='text-align: center; width: 6.25%'>方向</td>" +
                "<td style='text-align: center; width: 15%; border-right: none'>金额</td>"
            "</tr>" +
                "</thead>" +
                "<tbody>";
            var htmlSum = "</tbody>" +
                "</table>";
            var htmlFoot = "<table style='width: 100%; font-size: 12px; height: 40px;'>" +
                "<tr>" +
                "<td style='width:20%'></td>" +
                "<td style='width:20%'></td>" +
                "<td style='width:20%'></td>" +
                "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                "</tr>" +
                "</table>" +
                "<div style='height:1px'></div>";
            for (var i = 0; i < saveData.PrintData.length; i++) {
                var index = 0;
                var htmlDetail = "";
                var Area = Math.ceil(saveData.PrintData[i].Data.length / 13);
                for (var a = 0; a < Area; a++) {
                    if (Area > 1) {
                        var page = a + 1 + "/" + Area;
                        htmlHead = "<table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width:33.3333%'></td>" +
                            "<td style='font-size:20px;text-align:center;font-weight:400'> 明细账</td>" +
                            "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                            "</tr>" +
                            "<tr style='height: 30px; '>" +
                            "<td style='font-size: 12px; width: 33.3333%' ></td >" +
                            "<td style='font-size: 12px; text-align: center;' >" + perid + "</td > " +
                            "<td style='font-size: 12px; width: 33.3333%; text-align: right' > 单位：元" + "(" + page + ")" + "</td > " +
                            "</tr > " +
                            "</table >" +
                            "<table id='tbMX' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                            "<thead>" +
                            "<tr>" +
                            "<td style='text-align: center; width: 12.5%'>日期</td>" +
                            "<td style='text-align: center; width: 6.25%'>凭证字号</td>" +
                            "<td style='text-align: center; width: 15%'>科目</td>" +
                            "<td style='text-align: center; width: 15%'>摘要</td>" +
                            "<td style='text-align:center;width:15%;'>借方</td>" +
                            "<td style='text-align:center;width:15%;'>贷方</td>" +
                            "<td style='text-align: center; width: 6.25%'>方向</td>" +
                            "<td style='text-align: center; width: 15%; border-right: none'>金额</td>"
                        "</tr>" +
                            "</thead>" +
                            "<tbody>";
                    }
                    htmlDetail = "";
                    for (var j = 0; j < 13; j++) {
                        var Money1 = "";
                        var Money2 = "";
                        var Show_Credit_Debit = "";
                        var Show_Money = "";
                        var DetailDate = "";
                        var PZZ = "";
                        var Name = "";
                        var Summary = "";
                        try {
                            Money1 = saveData.PrintData[i].Data[j + index].Money1 == 0 ? "" : saveData.PrintData[i].Data[j + index].Money1;
                            Money2 = saveData.PrintData[i].Data[j + index].Money2 == 0 ? "" : saveData.PrintData[i].Data[j + index].Money2;
                            Show_Credit_Debit = saveData.PrintData[i].Data[j + index].Show_Credit_Debit == 0 ? "借" : "贷";
                            Show_Money = saveData.PrintData[i].Data[j + index].Show_Money == 0 ? "" : saveData.PrintData[i].Data[j + index].Show_Money;
                            DetailDate = YearMonthDay(saveData.PrintData[i].Data[j + index].DetailDate);
                            PZZ = saveData.PrintData[i].Data[j + index].PZZ;
                            Name = saveData.PrintData[i].Data[j + index].Name;
                            Summary = saveData.PrintData[i].Data[j + index].Summary;
                        } catch (e) {
                            continue;
                        }

                        htmlDetail += "<tr>" +
                            "<td style='text-align: center'>" + DetailDate + "</td> " +
                            "<td style='text-align :center'>" + PZZ + "</td>" +
                            "<td style='text-align: left'>" + Name + "</td>" +
                            "<td style='text-align: left'>" + Summary + "</td>" +
                            "<td style='text-align: right'>" + Money1 + "</td>" +
                            "<td style='text-align: right'>" + Money2 + "</td>" +
                            "<td style='text-align: center'>" + Show_Credit_Debit + "</td>" +
                            "<td style='text-align: right; border-right: none'>" + Show_Money + "</td>" +
                            "</tr>";
                    }
                    html += htmlHead + htmlDetail + htmlSum + htmlFoot;
                    if (Area > 1 && a < Area - 1) {
                        html += "<p style='page-break-after: always;'></p>";
                    }
                    index = index + 13;
                }

            }

            //window.close();

        }
    }

    //获取科目余额打印页面
    function GetKMHtml(saveData) {
        if (saveData != undefined && saveData.Data.length > 0) {
            htmlStyle +=
                "#tbKM td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbKM tr {" +
                "height: 50px;" +
                "}" +

                "#tbKM thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbKM tbody, #tbKM tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;


            for (var i = 0; i < saveData.PrintData.length; i++) {
                var perid = saveData.PrintData[i].Year + "年" + saveData.PrintData[i].Month + "期";
                var htmlHead = "<table style='width: 100%;'>" +
                    "<tr>" +
                    "<td style='width:33.3333%'></td>" +
                    "<td style='font-size:20px;text-align:center;font-weight:400'>科目余额表</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                    "</tr>" +
                    "<tr style='height: 30px; '>" +
                    "<td style='font-size: 12px; width: 33.3333%' ></td >" +
                    "<td style='font-size: 12px; text-align: center;'>" + perid + "</td>" +
                    "<td style='font-size: 12px; width: 33.3333%; text-align: right'></td>" +
                    "</tr > " +
                    "</table >" +
                    "<table id='tbKM' style='width: 100%;border: 1px solid #000000;' cellspacing='0' cellpadding='0'>" +
                    "<thead>" +
                    "<tr>" +
                    "<td rowspan='2' style='text-align: center; width: 10%' >科目编码</td>" +
                    "<td rowspan='2' style='text-align: center; width: 10%' >科目名称</td > " +
                    "<td colspan='2' style='text-align: center; width: 20%' >期初余额</td > " +
                    "<td colspan='2' style='text-align: center; width: 20%' >本期发生额</td > " +
                    "<td colspan='2' style='text-align: center; width: 20%' >本年累计发生额</td > " +
                    "<td colspan='2' style='text-align: center; width: 20%' >期末余额</td > " +
                    "</tr > " +
                    "<tr>" +
                    "<td style='width: 10%; text-align: center'>借方</td>" +
                    "<td style='width: 10%; text-align: center'> 贷方</td >" +
                    "<td style='width: 10%; text-align: center'>借方</td>" +
                    "<td style='width: 10%; text-align: center'>贷方</td>" +
                    "<td style='width: 10%; text-align: center'>借方</td>" +
                    "<td style='width: 10%; text-align: center'>贷方</td>" +
                    "<td style='width: 10%; text-align: center'>借方</td>" +
                    "<td style='width: 10%; text-align: center'>贷方</td>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";
                var htmlDetail = "";
                for (var j = 0; j < saveData.PrintData[i].Data.length; j++) {
                    htmlDetail += "<tr>" +
                        "<td style='text-align: left'>" + saveData.PrintData[i].Data[j].Code + "</td>" +
                        "<td style='text-align: left'>" + saveData.PrintData[i].Data[j].Name + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWBStart_J) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWBStart_D) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWB_CJ) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWB_CD) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWB_YJ) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWB_YD) + "</td>" +
                        "<td style='text-align: right'>" + noZero(saveData.PrintData[i].Data[j].BWBEnd_J) + "</td>" +
                        "<td style='text-align: right; border-right: none'>" + noZero(saveData.PrintData[i].Data[j].BWBEnd_D) + "</td>" +
                        "</tr>";
                    count++;
                }
                var htmlSum = "</tbody>" +
                    "</table>";
                var htmlFoot = "<table style='width: 100%; font-size: 12px; height: 40px;'>" +
                    "<tr>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                    "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                    "</tr>" +
                    "</table>" +
                    "<div style='height:1px'></div>";
                html += htmlHead + htmlDetail + htmlSum + htmlFoot;
            }


        }
    }

    //获取总账打印页面
    function GetZZHtml(saveData) {
        if (saveData != undefined && saveData.Data.length > 0) {
            htmlStyle +=
                "#tbZZ td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbZZ tr {" +
                "height: 50px;" +
                "}" +

                "#tbZZ thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbZZ tbody, #tbZZ tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            for (var i = 0; i < saveData.Data.length; i++) {
                var htmlHead = "<table style='width:100%;'>" +
                    "<tr style='height: 30px;'>" +
                    "<td style='width:33.3333%'></td>" +
                    "<td style='font-size:20px;text-align:center;font-weight:400'> " + saveData.Data[i].Name + "总账</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                    "</tr>" +
                    "<tr style='height: 30px;'>" +
                    "<td style='font-size:12px;width:33.3333%'> " + saveData.Data[i].Code + saveData.Data[i].Name + "</td>" +
                    "<td style='font-size:12px;text-align:center;'>" + saveData.Data[i].Data[0].Period + "</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'>单位：元</td>" +
                    "</tr>" +
                    "</table >" +
                    "<table id='tbZZ' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                    "<thead>" +
                    "<tr>" +
                    "<td style='text-align: center; width: 11%'>科目编码</td>" +
                    "<td style='text-align: center; width: 11%'> 科目名称</td >" +
                    "<td style='text-align: center; width: 11%'> 期间</td > " +
                    "<td style='text-align: center; width: 15%'> 摘要</td > " +
                    "<td style='text-align: center; width: 15%'> 借方金额</td > " +
                    "<td style='text-align: center; width: 15%'> 贷方金额</td > " +
                    "<td style='text-align: center; width: 7%'> 方向</td > " +
                    "<td style='text-align: center; width: 15%; border-right: none'>余额</td>" +
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
                        "<td style='text-align: right; border-right: none'>" + Show_Money + "</td>" +
                        "</tr>";
                }
                var htmlSum = "</tbody>" +
                    "</table>";

                var htmlFoot = "<table style='width:100%;font-size:12px;height:40px;'>" +
                    "<tr>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                    "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                    "</tr>" +
                    "</table>" +
                    "<div style='height:1px'></div>";
                count++;
                var pageHtml = "<p style='page-break-after: always;'></p>";
                html += htmlHead + htmlDetail + htmlSum + htmlFoot;
                if (saveData.Data.length > 1 && i < saveData.Data.length - 1) {
                    html += "<p style='page-break-after: always;'></p>";
                }
            }
        }
    }

    //获取资产负债表打印页面
    function GetZCFZHtml(saveData) {
        if (saveData != undefined && saveData.PrintData.length > 0) {
            htmlStyle +=
                "#tbzcfz td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                //"padding: 2px;" +
                //"letter-spacing: 1px;" +
                "}" +

                "#tbzcfz tr {" +
                "height: 30px;" +
                "}" +

                "#tbzcfz thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbzcfz tbody, #tbzcfz tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            var printData1 = new Array();
            var printData2 = new Array();
            for (var i = 0; i < saveData.PrintData.length; i++) {
                var printData1 = new Array();
                var printData2 = new Array();
                printData1 = printData1.concat(saveData.PrintData[i].Data.LDZC);
                printData1 = printData1.concat(saveData.PrintData[i].Data.FLDZC);
                printData1 = printData1.concat(saveData.PrintData[i].Data.ZCHJ);
                printData2 = printData2.concat(saveData.PrintData[i].Data.LDFZ);
                printData2 = printData2.concat(saveData.PrintData[i].Data.FLDFZ);
                printData2 = printData2.concat(saveData.PrintData[i].Data.FZHJ);
                printData2 = printData2.concat(saveData.PrintData[i].Data.SYZQY);
                var len2 = saveData.PrintData[i].Data.LDFZ.length + saveData.PrintData[i].Data.FLDFZ.length + saveData.PrintData[i].Data.FZHJ.length + saveData.PrintData[i].Data.SYZQY.length;
                if (printData1.length > len2) {
                    for (var l = 0; l < printData1.length - len2 - saveData.PrintData[i].Data.SYZQYHJ.length; l++) {
                        printData2 = printData2.concat({
                            AccountId: null
                            , Category: 0
                            , ColumnName: ""
                            , EndBalance: 0
                            , Id: null
                            , OperatorCharacter: null
                            , ParentId: null
                            , PeriodId: null
                            , Seq: 0
                            , SourceType: 3
                            , SourceValue: null
                            , YearStartBalance: 0
                        });
                    }
                }
                printData2 = printData2.concat(saveData.PrintData[i].Data.SYZQYHJ);
                var perid = saveData.PrintData[i].Year + "年" + saveData.PrintData[i].Month + "期";
                var htmlHead = "<table style='width:100%;'>" +
                    "<tr style='height: 25px;'>" +
                    "<td style='width:33.3333%'></td>" +
                    "<td style='font-size:20px;text-align:center;font-weight:400'>资产负债表</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                    "</tr>" +
                    "<tr style='height: 15px;'>" +
                    "<td style='font-size:12px;width:33.3333%'></td>" +
                    "<td style='font-size:12px;text-align:center;'>" + perid + "</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'>单位：元</td>" +
                    "</tr>" +
                    "</table >" +
                    "<table id='tbzcfz' style='border: 1px solid #000000;width:100%;' cellspacing='0' cellpadding='0'>" +
                    "<thead>" +
                    "<tr>" +
                    "<td style='text-align: center; width: 18%'>资产</td>" +
                    "<td style='text-align: center; width: 10%'>行次</td >" +
                    "<td style='text-align: center; width: 11%'>期末余额</td > " +
                    "<td style='text-align: center; width: 11%'>年初余额</td > " +
                    "<td style='text-align: center; width: 18%'>负债和所有者权益</td > " +
                    "<td style='text-align: center; width: 10%'>行次</td > " +
                    "<td style='text-align: center; width: 11%'>期末余额</td > " +
                    "<td style='text-align: center; width: 11%;'>年初余额</td>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";
                var htmlDetail = "";

                for (var j = 0; j < printData1.length; j++) {
                    var weight1 = "<b>" + printData1[j].ColumnName + "</b>";
                    var small1 = "&nbsp;&nbsp;" + printData1[j].ColumnName;
                    var head1 = printData1[j].Seq == 0 ? weight1 : small1;
                    var Seq1 = printData1[j].Seq != 0 ? printData1[j].Seq : "";
                    var EndBalance1 = printData1[j].EndBalance != 0 ? printData1[j].EndBalance : "";
                    var YearStartBalance1 = printData1[j].YearStartBalance != 0 ? printData1[j].YearStartBalance : "";
                    var html1 = "<td style='text-align: left;'>" + head1 + "</td >" +
                        "<td style='text-align: center'>" + Seq1 + "</td>" +
                        "<td style='text-align: right'>" + EndBalance1 + "</td>" +
                        "<td style='text-align: right;'>" + YearStartBalance1 + "</td>";

                    var weight2 = "<b>" + printData2[j].ColumnName + "</b>";
                    var small2 = "&nbsp;&nbsp;" + printData2[j].ColumnName;
                    var head2 = printData2[j].Seq == 0 ? weight2 : small2;
                    var Seq2 = printData2[j].Seq != 0 ? printData2[j].Seq : "";
                    var EndBalance2 = printData2[j].EndBalance != 0 ? printData2[j].EndBalance : "";
                    var YearStartBalance2 = printData2[j].YearStartBalance != 0 ? printData2[j].YearStartBalance : "";
                    var html2 = "<td style='text-align: left;'>" + head2 + "</td >" +
                        "<td style='text-align: center'>" + Seq2 + "</td>" +
                        "<td style='text-align: right'>" + EndBalance2 + "</td>" +
                        "<td style='text-align: right;'>" + YearStartBalance2 + "</td>";
                    htmlDetail += "<tr>" + html1 + html2 + "</tr>";
                }
                var htmlSum = "</tbody>" +
                    "</table>";

                var htmlFoot = "<table style='width:100%;font-size:12px;height:40px;'>" +
                    "<tr>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                    "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                    "</tr>" +
                    "</table>";
                count++;

                html += htmlHead + htmlDetail + htmlSum + htmlFoot;

            }
        }
    }

    //获取利润表打印页面
    function GetLRHtml(saveData) {
        if (saveData != undefined && saveData.PrintData.length > 0) {
            htmlStyle +=
                "#tbLR td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbLR tr {" +
                "height: 50px;" +
                "}" +

                "#tbLR thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbLR tbody, #tbLR tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            for (var i = 0; i < saveData.PrintData.length; i++) {
                var perid = saveData.PrintData[i].Year + "年" + saveData.PrintData[i].Month + "期";
                var htmlHead = "<table style='width: 100%;'>" +
                    "<tr style='height: 30px;'>" +
                    "<td style='width:33.3333%'></td>" +
                    "<td style='font-size:20px;text-align:center;font-weight:400'>利润表</td>" +
                    "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                    "</tr>" +
                    "<tr  style='height: 30px;'>" +
                    "<td style='font-size: 12px; width: 33.3333%' ></td >" +
                    "<td style='font-size: 12px; text-align: center;'>" + perid + "</td>" +
                    "<td style='font-size: 12px; width: 33.3333%; text-align: right'>单位：元</td>" +
                    "</tr > " +
                    "</table >" +
                    "<table id='tbLR' style='border: 1px solid #000000;width: 100%;' cellspacing='0' cellpadding='0'>" +
                    "<thead>" +
                    "<tr>" +
                    "<td style='width: 30%; text-align: center'>项目</td>" +
                    "<td style='width: 10%; text-align: center'>行次</td >" +
                    "<td style='width: 30%; text-align: center'>本年累计金额</td>" +
                    "<td style='width: 30%; text-align: center'>本期金额</td>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";
                var htmlDetail = "";
                for (var j = 0; j < saveData.PrintData[i].Data.length; j++) {
                    var Seq = saveData.PrintData[i].Data[j].Seq != 0 ? saveData.PrintData[i].Data[j].Seq : "";
                    var weight = "<b>" + saveData.PrintData[i].Data[j].ColumnName + "</b>";
                    var small = "&nbsp;&nbsp;" + saveData.PrintData[i].Data[j].ColumnName;
                    var head = small;
                    if (Seq == 21 || Seq == 30 || Seq == 32) {
                        head = weight;
                    }
                    var Money_Year = saveData.PrintData[i].Data[j].Money_Year != 0 ? saveData.PrintData[i].Data[j].Money_Year : "";
                    var Money_Month = saveData.PrintData[i].Data[j].Money_Month != 0 ? saveData.PrintData[i].Data[j].Money_Month : "";
                    htmlDetail += "<tr>" +
                        "<td style='text-align: left'>" + head + "</td>" +
                        "<td style='text-align: center'>" + Seq + "</td>" +
                        "<td style='text-align: right'>" + Money_Year + "</td>" +
                        "<td style='text-align: right'>" + Money_Month + "</td>" +
                        "</tr>";
                    count++;
                }
                var htmlSum = "</tbody>" +
                    "</table>";
                var htmlFoot = "<table style='width: 100%; font-size: 12px; height: 40px;'>" +
                    "<tr>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width:20%'></td>" +
                    "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                    "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                    "</tr>" +
                    "</table>" +
                    "<div style='height:1px'></div>";
                html += htmlHead + htmlDetail + htmlSum + htmlFoot;
            }


        }
    }

    //获取经营表打印页面
    function GetJYHtml(saveData) {
        if (saveData != undefined) {
            htmlStyle +=
                "#tbJY td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbJY tr {" +
                "height: 60px;" +
                "}" +

                "#tbJY thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbJY tbody, #tbJY tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            //for (var i = 0; i < saveData.length; i++) {
            var htmlHead = "<table style='width: 100%;'>" +
                "<tr style='height: 30px;'>" +
                "<td style='width:33.3333%'></td>" +
                "<td style='font-size:20px;text-align:center;font-weight:400'>经营报表</td>" +
                "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                "</tr>" +
                "<tr  style='height: 30px;'>" +
                "<td style='font-size: 12px; width: 33.3333%' >编制单位：" + saveData.Account + "</td >" +
                "<td style='font-size: 12px; text-align: center;'></td>" +
                "<td style='font-size: 12px; width: 33.3333%; text-align: right'></td>" +
                "</tr > " +
                "</table >" +
                "<table id='tbJY' style='border: 1px solid #000000;width: 100%;' cellspacing='0' cellpadding='0'>" +
                "<thead>" +
                "<tr>" +
                "<td style='width: 30%; text-align: center'>项目</td>" +
                "<td style='width: 30%; text-align: center'>科目</td >" +
                "<td style='width: 10%; text-align: center'>方向</td>" +
                "<td style='width: 30%; text-align: center'>金额</td>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";
            var htmlDetail = "";

            if (saveData.KPMoney != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.KPMoney.Subject + "</td>" +
                    "<td></td>" +
                    "<td>" + saveData.KPMoney.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.KPMoney.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.KPMoneyYear != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.KPMoneyYear.Subject + "</td>" +
                    "<td></td>" +
                    "<td>" + saveData.KPMoneyYear.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.KPMoneyYear.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.BankDepositBal.length > 0) {
                $.each(saveData.BankDepositBal, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            if (saveData.ARAccountBal.length > 0) {
                $.each(saveData.ARAccountBal, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            if (saveData.KHMoney.length > 0) {
                $.each(saveData.KHMoney, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            if (saveData.APAccountBal.length > 0) {
                $.each(saveData.APAccountBal, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            if (saveData.PaySupplierMoney.length > 0) {
                $.each(saveData.PaySupplierMoney, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            if (saveData.CGSupplierMoney.length > 0) {
                $.each(saveData.CGSupplierMoney, function (index, obj) {
                    var head = "";
                    if (index == 0) {
                        head = obj[index].Item;
                    }
                    htmlDetail += "<tr>" +
                        "<td>" + head + "</td>" +
                        "<td>" + obj[index].Subject + "</td>" +
                        "<td>" + obj[index].Credit_Debit + "</td>" +
                        "<td style='text-align: right'>" + obj[index].Money + "</td>" +
                        "</tr>";
                });
            }
            var htmlSum = "</tbody>" +
                "</table>";
            var htmlFoot = "<table style='width: 100%; font-size: 12px; height: 40px;'>" +
                "<tr>" +
                "<td style='width:20%'></td>" +
                "<td style='width:20%'></td>" +
                "<td style='width:20%'></td>" +
                "<td style='width: 20%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                "<td style='width: 20%; text-align: right'>【章小算财税】</td>" +
                "</tr>" +
                "</table>" +
                "<div style='height:1px'></div>";
            html += htmlHead + htmlDetail + htmlSum + htmlFoot;
            //}


        }
    }

    //获取税金表打印页面
    function GetSJHtml(saveData) {
        if (saveData != undefined) {
            htmlStyle +=
                "#tbSJ td {" +
                "border-right: 1px solid #808080;" +
                "border-bottom: 1px solid #808080;" +
                "padding: 2px;" +
                "letter-spacing: 1px;" +
                "}" +

                "#tbSJ tr {" +
                "height: 60px;" +
                "}" +

                "#tbSJ thead {" +
                " font-size: 14px;" +
                "}" +

                "#tbSJ tbody, #tbSJ tfoot {" +
                "font-size: 12px; " +
                "}";
            var count = 0;
            //for (var i = 0; i < saveData.length; i++) {
            var htmlHead = "<table style='width: 100%;'>" +
                "<tr style='height: 30px;'>" +
                "<td style='width:33.3333%'></td>" +
                "<td style='font-size:20px;text-align:center;font-weight:400'>税金表</td>" +
                "<td style='font-size:12px;width:33.3333%;text-align:right'></td>" +
                "</tr>" +
                "<tr  style='height: 30px;'>" +
                "<td style='font-size: 12px; width: 33.3333%' >编制单位：" + saveData.Account + "</td >" +
                "<td style='font-size: 12px; text-align: center;'></td>" +
                "<td style='font-size: 12px; width: 33.3333%; text-align: right'></td>" +
                "</tr > " +
                "</table >" +
                "<table id='tbSJ' style='border: 1px solid #000000;width: 100%;' cellspacing='0' cellpadding='0'>" +
                "<thead>" +
                "<tr>" +
                "<td style='width: 50%; text-align: center'>项目</td>" +
                "<td style='width: 10%; text-align: center'>方向</td>" +
                "<td style='width: 40%; text-align: center'>金额</td>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";
            var htmlDetail = "";

            if (saveData.XXTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.XXTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.XXTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.XXTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.UnCal_XXTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.UnCal_XXTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.UnCal_XXTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.UnCal_XXTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.JXTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.JXTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.JXTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.JXTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.UnCal_JXTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.UnCal_JXTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.UnCal_JXTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.UnCal_JXTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.Pre_ZZTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.Pre_ZZTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.Pre_ZZTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.Pre_ZZTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.LocalSJ != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.LocalSJ.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.LocalSJ.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.LocalSJ.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.Cal_TotalSDTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.Cal_TotalSDTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.Cal_TotalSDTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.Cal_TotalSDTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.Total_Deliver_SDTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.Total_Deliver_SDTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.Total_Deliver_SDTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.Total_Deliver_SDTax.Money + "</td>" +
                    "</tr>";
            }
            if (saveData.Pre_SDTax != undefined) {
                htmlDetail += "<tr>" +
                    "<td>" + saveData.Pre_SDTax.Subject + "</td>" +
                    "<td style='text-align: center'>" + saveData.Pre_SDTax.Credit_Debit + "</td>" +
                    "<td style='text-align: right'>" + saveData.Pre_SDTax.Money + "</td>" +
                    "</tr>";
            }
            var htmlSum = "</tbody>" +
                "</table>";
            var htmlFoot = "<table style='width: 100%; font-size: 12px; height: 40px;'>" +
                "<tr>" +
                "<td style='width:20%'></td>" +
                "<td style='width:20%'></td>" +
                "<td style='width: 30%; text-align: right'>打印日期：" + CurentTime() + "</td>" +
                "<td style='width: 30%; text-align: right'>【章小算财税】</td>" +
                "</tr>" +
                "</table>";
            html += htmlHead + htmlDetail + htmlSum + htmlFoot;
            //}


        }
    }

    function digitUppercase(n) {
        var fraction = ['角', '分'];
        var digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ];
        var unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整');
    };

    function YearMonthDay(time) {
        if (time == null || time == undefined) return "";
        var t = time.split('T');
        if (t.length < 2) return time;
        var result = t[0];
        return result;
    }

    //当前日期
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
    //去0
    function noZero(val) {
        if (val == 0) {
            return "";
        }
        else {
            //return val.toString().replace('-', '');
            return val.toString();
        }
    }

    function thousand(val) {
        if (val == 0 || val == "") {
            return "";
        }
        else {
            return numeral(val).format('0,0.00');
        }
    }

})