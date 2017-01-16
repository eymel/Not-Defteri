﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _00_Entity;

namespace _00_DataAccessLayer.Repository
{
   public   class SharedNoteRepository:BaseRepository<SharedNote>
    {
        public SharedNoteRepository(NoteContext context):base(context)
        {

        }
    }
}
