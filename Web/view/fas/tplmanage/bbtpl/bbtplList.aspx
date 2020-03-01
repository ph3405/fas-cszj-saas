﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="bbtplList.aspx.cs" Inherits="view_fptplList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>发票对应模板</title>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../../../../layui/css/layui.css" media="all" />

    <%--<link rel="stylesheet" href="../../css/user.css" media="all" />--%>
</head>
<body class="childrenBody">
    <blockquote class="layui-elem-quote news_search">
        <div class="layui-inline">

            <a id="btnSearch" class="layui-btn ">查询</a>
        </div>
        <div class="layui-inline">
            <a id="btnAdd" class="layui-btn layui-btn-normal ">新增</a>
        </div>

        <div class="layui-inline">
            <div class="layui-form-mid layui-word-aux"></div>
        </div>
    </blockquote>
    <div class="layui-form users-list">
        <table class="layui-table">

            <thead>
                <tr>
                    <th width="300">标题</th>
                  
                    <th width="150">创建人</th>
                    <th width="150">创建日期</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="dt"></tbody>
        </table>
    </div>
    <div id="page"></div>

    <script id="tpl-list" type="text/x-jsrender">
        <tr>

            <td>{{:Title}}</td>
            <td>{{:CreateUser}}</td>
            <td>{{:~TimeFormatter(CreateDate)}}</td>
            <td>
                <a class="layui-btn layui-btn-mini tks-rowColumn" data-url="/view/fas/tplmanage/bbDetailTpl/bbDetailtplList.aspx?id={{:Id}}"    data-id="{{:Id}}"><cite>{{:Title}}列明细</cite></a>

                <a class="layui-btn layui-btn-mini tks-rowEdit" data-id="{{:Id}}"><i class="layui-icon">&#xe642;</i>编辑</a>

                <a class="layui-btn layui-btn-danger layui-btn-mini tks-rowDel" data-id="{{:Id}}"><i class="layui-icon">&#xe640;</i> 删除</a>
            </td>
        </tr>
    </script>
    <script>
        var token = '<%=Token%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
    <script type="text/javascript" src="bbtplList.js"></script>
</body>
</html>
