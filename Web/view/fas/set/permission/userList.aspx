﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="userList.aspx.cs" Inherits="view_user_UserList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>用户管理</title>
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
            <div class="layui-input-inline">
                <input type="text" id="txtName" value="" placeholder="请输入关键字" class="layui-input search_input">
            </div>
            <a class="layui-btn search_btn">查询</a>
        </div>
        <div class="layui-inline">
            <a class="layui-btn layui-btn-normal usersAdd_btn">添加用户</a>
        </div>
        
        <div class="layui-inline">
            <div class="layui-form-mid layui-word-aux"></div>
        </div>
    </blockquote>
    <div class="layui-form users-list">
        <table class="layui-table">

            <thead>
                <tr>
                   
                    <th width="200">登录名</th>
                    <th width="200">真实姓名</th>
                       <th width="100">手机</th>
                    <th width="30">性别</th>
                
                    <th width="60">会员状态</th>

                    <th width="200">操作</th>
                </tr>
            </thead>
            <tbody id="userDt" class="users_content"></tbody>
        </table>
    </div>
    <div id="page"></div>

    <script id="tpl-userList" type="text/x-jsrender">
        <tr>
            
            <td>{{:UserName}}</td>
            <td>{{:TrueName}}</td>
            <td>{{:Mobile}}</td>
            <td>{{if Sex==0}} 女 {{else}} 男 {{/if}} </td>
          
            <td>{{if Status==0}}  未启用   {{else}}   启用   {{/if}} 

            </td>

            <td style="text-align:left">
                 <a class="layui-btn layui-btn-mini layui-btn-warm tks-rowRole" data-id="{{:Id}}"><i class="layui-icon">&#xe612;</i>设置角色</a>

                <a class="layui-btn layui-btn-mini tks-rowEdit" data-id="{{:Id}}"><i class="layui-icon">&#xe642;</i>编辑</a>
					
                <a class="layui-btn layui-btn-danger layui-btn-mini tks-rowDel" data-id="{{:Id}}"><i class="layui-icon">&#xe640;</i> 删除</a>
		    </td>
        </tr>
    </script>
    <script>
        var token='<%=Token%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
    <script type="text/javascript" src="userList.js"></script>
</body>
</html>
