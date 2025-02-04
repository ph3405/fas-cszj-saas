﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="userAdd.aspx.cs" Inherits="view_user_UserEditor" %>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>用户新增</title>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../../../../layui/css/layui.css" media="all" />
    <style type="text/css">
        .layui-form-item .layui-inline {
            width: 33.333%;
            float: left;
            margin-right: 0;
        }

        @media(max-width:1240px) {
            .layui-form-item .layui-inline {
                width: 100%;
                float: none;
            }
        }
    </style>
</head>
<body class="childrenBody">
    <form id="editForm" class="layui-form" style="width: 80%;">
        <script id="tpl-Edit" type="text/x-jsrender">
          
            <div class="layui-form-item">
                <label class="layui-form-label">登录名</label>
                <div class="layui-input-block">
                    <input type="text" class="layui-input    " value="{{:UserName}}" name="UserName" lay-verify="required" placeholder="请输入登录名">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">真实姓名</label>
                <div class="layui-input-block">
                    <input type="text" class="layui-input   " value="{{:TrueName}}" name="TrueName" lay-verify="required" placeholder="请输入真实姓名">
                </div>
            </div>

            <div class="layui-form-item">
                <label class="layui-form-label">密码</label>
                <div class="layui-input-block">
                    <input type="password" class="layui-input   "  name="Password1" lay-verify="required" >
                </div>
            </div>

              <div class="layui-form-item">
                <label class="layui-form-label">确认密码</label>
                <div class="layui-input-block">
                    <input type="password" class="layui-input   "   name="Password2" lay-verify="required" >
                </div>
            </div>

            <div class="layui-form-item">
                <label class="layui-form-label">手机</label>
                <div class="layui-input-block">
                    <input type="text" class="layui-input" value="{{:Mobile}}" name="Mobile" lay-verify="required" placeholder="请输入手机号码">
                </div>
            </div>
            <div class="layui-form-item">

                <label class="layui-form-label">性别</label>
                <div class="layui-input-block ">
                    {{if Sex==1 }}
                        <input type="radio" name="Sex" value="1" title="男" checked />
                    <input type="radio" name="Sex" value="0" title="女" />
                    {{else }}
                         <input type="radio" name="Sex" value="1" title="男" />
                    <input type="radio" name="Sex" value="0" title="女" checked />
                    {{/if}}
                </div>

            </div>
            <div class="layui-form-item">

                <label class="layui-form-label">会员状态</label>
                <div class="layui-input-block">
                    <select name="Status" lay-filter="userStatus">
                        {{if Status==0}}
                             <option value="1">启用</option>
                        <option value="0" selected>停用</option>
                        {{else}}
                             <option value="1" selected>启用</option>
                        <option value="0">停用</option>
                        {{/if}}
                           
                    </select>
                </div>

            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">简介</label>
                <div class="layui-input-block">
                    <textarea class="layui-textarea " name="Memo">{{:Memo}}</textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit="" lay-filter="">保存</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>

        </script>

    </form>
      <script>
        var token='<%=Token%>';
    </script>
    <script type="text/javascript" src="../../../../layui/layui.js"></script>
    <script type="text/javascript" src="userAdd.js"></script>
</body>
</html>
