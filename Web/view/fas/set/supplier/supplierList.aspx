﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="supplierList.aspx.cs" Inherits="view_fas_set_pzzList" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>兼职会计管理</title>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../../../../layui/css/layui.css" media="all" />


</head>
<body class="childrenBody">
    <blockquote class="layui-elem-quote ">
        
        <div class="layui-inline">
            <a id="btnAdd" class="layui-btn layui-btn-normal "><i class="layui-icon">&#xe654;</i>新增兼职会计</a>
        </div>

        <div class="layui-inline">
            <div class="layui-form-mid layui-word-aux"></div>
        </div>
    </blockquote>
    <div class="layui-form  ">
        <table class="layui-table">

            <thead>
                <tr>

                    <th width="100">兼职会计</th>
                    <th width="100">创建人</th>
                    <th width="100">创建日期</th>
                  
                    <th width="100">操作</th>
                </tr>
            </thead>
            <tbody id="dt" class="users_content"></tbody>
        </table>
    </div>
    <div id="page"></div>

    <script id="tpl-list" type="text/x-jsrender">
        <tr>

            <td>{{:SupplierName}}</td>
            <td>{{:CreateUser}}</td>
            <td>{{:~TimeFormatter(CreateDate)}}</td>
       
            <td style="text-align:left">
 
                <a class="layui-btn layui-btn-danger layui-btn-mini tks-rowDel" data-id="{{:Id}}"><i class="layui-icon">&#xe640;</i> 删除</a>
            </td>
        </tr>
    </script>
    <script>
        var token = '<%=Token%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
    <script type="text/javascript" src="supplierList.js?_=20171130"></script>
</body>
</html>

