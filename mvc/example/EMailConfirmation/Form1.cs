using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1EMail
{
    public partial class Form1 : Form
    {
        static bool mailSent = false;
        public Form1()
        {
            InitializeComponent();
        }

        private static void SendCompletedCallback(object sender, AsyncCompletedEventArgs e)
        {
            // Get the unique identifier for this asynchronous operation.
            String token = (string)e.UserState;

            if (e.Cancelled)
            {
                Console.WriteLine("[{0}] Send canceled.", token);
            }
            if (e.Error != null)
            {
                Console.WriteLine("[{0}] {1}", token, e.Error.ToString());
            }
            else
            {
                Console.WriteLine("Message sent.");
            }
            mailSent = true;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MailMessage msg = new MailMessage();
            string html = "Please confirm your account by clicking this link: <a href=\"" + "test" + "\">link</a><br/>";
            msg.From = new MailAddress("tonychenn@gmail.com");
            msg.To.Add(new MailAddress("tonychenn@gmail.com"));
            msg.Subject = "EMail Confirmation";
            //msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
            msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, System.Net.Mime.MediaTypeNames.Text.Html));

            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", Convert.ToInt32(5871));
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("tonychenn@gmail.com", "68052705gm");
            smtpClient.Credentials = credentials;
            smtpClient.SendCompleted += new
                        SendCompletedEventHandler(SendCompletedCallback);
            smtpClient.EnableSsl = true;
            smtpClient.Timeout = 100;
            // The userState can be any object that allows your callback 
            // method to identify this send operation.
            // For this example, the userToken is a string constant.
            string userState = "test message1";
            smtpClient.SendAsync(msg, userState);

            MessageBox.Show("email send!!");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show("I'm clicked!!");
        }
    }
}
