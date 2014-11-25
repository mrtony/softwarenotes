using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication2LinqToSql
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //新增一筆資料
        private void button1_Click(object sender, EventArgs e)
        {
            StudentDataContext db = new StudentDataContext();
            
            //可直接使用db的table(因為已經被自動宣告了class)來宣告一筆資料
            student newStudent = new student() { Id = 1, Name = "Tony", Gender = "Male" };

            db.student.InsertOnSubmit(newStudent);
            db.SubmitChanges();
            MessageBox.Show("Insert success!!");
        }

        //查詢資料並log SQL的命令
        private void button2_Click(object sender, EventArgs e)
        {
            using
            (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"c:\temp\tempdatacontext.log"))
            {
                StudentDataContext db = new StudentDataContext();
                //assigned streamwriter to the log property of datacontext
                db.Log = sw;
                var result = from p in db.student select p;

                foreach (var item in result)
                {
                    Console.WriteLine(item.Id + "\t" + item.Name + "\t" + item.Gender);
                }  
            }
        }

        //新增一筆資料並log SQL的命令
        private void button3_Click_1(object sender, EventArgs e)
        {
            using
            (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"c:\temp\tempdatacontext.log"))
            {
                StudentDataContext db = new StudentDataContext();
                db.Log = sw;

                //可直接使用db的table(因為已經被自動宣告了class)來宣告一筆資料
                student newStudent = new student() { Id = 3, Name = "Sam", Gender = "Male" };

                db.student.InsertOnSubmit(newStudent);
                db.SubmitChanges();
            }
        }
        
        //執行更新Id=1的資料
        private void button4_Click(object sender, EventArgs e)
        {
            using
            (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"c:\temp\tempdatacontext.log"))
            {
                StudentDataContext db = new StudentDataContext();
                db.Log = sw;
                //assigned streamwriter to the log property of datacontext

                student myStudent = db.student.Single(p => p.Id == 1);
                myStudent.Name = "TonyCHEN";
                db.SubmitChanges();
            }
        }
    }
}
