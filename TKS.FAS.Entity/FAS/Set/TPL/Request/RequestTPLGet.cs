﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.FAS
{
    public class RequestTPLGet:RequestBase
    {
        public TKS_FAS_DocTPL Data { get; set; }

        /// <summary>
        /// 金额
        /// </summary>
        public decimal Money { get; set; }
    }
}
