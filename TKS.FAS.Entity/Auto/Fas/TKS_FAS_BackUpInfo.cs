﻿using System;
using System.Text;
using System.Collections.Generic;
using System.Data;
namespace TKS.FAS.Entity
{
    //会计科目表
    public class TKS_FAS_BackUpInfo
    {

        /// <summary>
        /// Id
        /// </summary>		
        public string Id
        {
            get;
            set;
        }
        /// <summary>
        /// 账套ID
        /// </summary>		
        public string AccountId
        {
            get;
            set;
        }
	
        public string Name
        {
            get;
            set;
        }
        /// <summary>
        /// Path
        /// </summary>		
        public string Path
        {
            get;
            set;
        }
	
        public string Size
        {
            get;
            set;
        }
        /// <summary>
        /// CreateUser
        /// </summary>		
        public string CreateUser
        {
            get;
            set;
        }
        /// <summary>
        /// CreateDate
        /// </summary>		
        public DateTime? CreateDate
        {
            get;
            set;
        }


    }
}