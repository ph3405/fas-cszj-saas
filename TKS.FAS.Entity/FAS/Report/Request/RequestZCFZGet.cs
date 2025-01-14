﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TKS.FAS.Entity.FAS
{
    /// <summary>
    /// 资产负债表获取
    /// </summary>
    public class RequestZCFZGet : RequestBase
    {
        /// <summary>
        /// 期间
        /// </summary>
        public string PeriodId { get; set; }
        public string Period_S { get; set; }

        public string Period_E { get; set; }
        public string AccountList { get; set; }
    }
}
