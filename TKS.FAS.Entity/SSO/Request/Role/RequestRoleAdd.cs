﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.SSO
{
    public class RequestRoleAdd : RequestBase
    {
        public TKS_FAS_Role Data { get; set; }

        public string[] Permission { get; set; }
    }
}
