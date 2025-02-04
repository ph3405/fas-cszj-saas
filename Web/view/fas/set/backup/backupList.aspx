﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="backupList.aspx.cs" Inherits="view_fas_set_backup_backupList" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>备份恢复</title>
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
            <a id="StartBackup" class="layui-btn layui-btn-normal ">开始备份</a>
        </div>

        <div class="layui-inline">
            <a id="Import" class="layui-btn layui-btn-normal ">上传备份</a>
        </div>
        <div   style="float:right">
        <div class="layui-inline" >
            <div class="layui-input-inline">
                <input type="text" id="StartDate" class="laydate-icon" style="height: 36px; width: 100px" />
            </div>
            <div class="layui-input-inline">-</div>
            <div class="layui-input-inline">
                <input type="text" id="EndDate" class="laydate-icon" style="height: 36px; width: 100px" />
            </div>
        </div>
        <div class="layui-inline">
            <a class="layui-btn search_btn">查询</a>
        </div>
            </div>
    </blockquote>
    <div class="layui-form  ">
        <table class="layui-table">

            <thead>
                <tr>
                    <th width="200">备份名称</th>
                    <th width="100">日期</th>
                    <th width="50">文件大小（MB）</th>
                    <%--<th width="100">操作人</th>--%>
                    <th width="150">操作</th>
                </tr>
            </thead>
            <tbody id="dt" class="users_content"></tbody>
        </table>
    </div>
    <div id="page"></div>

    <script id="tpl-list" type="text/x-jsrender">
        <tr>

            <td>{{:Name}}</td>
            <td>{{:~TimeFormatter(CreateDate)}}</td>
            <td>{{:Size}}</td>
           <%-- <td>{{:CreateUser}}</td>--%>
            
            <td style="text-align: left">
                <a class="layui-btn layui-btn-mini tks-rowHuiFu" data-me="{{:Name}}" data-id="{{:Id}}"><i class="layui-icon">&#xe642;</i>恢复</a>
                <a class="layui-btn layui-btn-danger layui-btn-mini tks-rowDel" data-id="{{:Id}}"><i class="layui-icon">&#xe640;</i> 删除</a>
                <a class="layui-btn layui-btn-mini tks-rowDownload" data-me="{{:Name}}" data-id="{{:Id}}"><i class="layui-icon">&#xe642;</i>下载</a>

            </td>
        </tr>
    </script>
    <script>
        var token = '<%=Token%>';
        var userName = '<%=UserName%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
    <script type="text/javascript" src="../../../../layui/laydate/laydate.js"></script>
    <script type="text/javascript" src="backupList.js?v=20180817"></script>
</body>
</html>

