import Faculty from '../Assets/faculty_icon.png'
import Edge_cur from '../Assets/cutt_edge_curr.png'
import liveclass from '../Assets/live_lect_icon.png'
import diss_forum from '../Assets/diss_forum.png'
import video_lect from '../Assets/video_lect_icon.png'
import E_book from '../Assets/E_book.png'
import notification from '../Assets/notify_icon.png'
import trust_icon from '../Assets/trust_icon.png'
import fee_afford from '../Assets/fee_afford_icon.png'
import offline_video from '../Assets/offline_lect.png'
import anytime_anywhere from '../Assets/anywhere_icon.png'
import assignment_test from '../Assets/assi_icon.png'



const courseData = [
    {
      id: 1,
      title: 'World-Class Faculty',
      description: 'Learn from the accomplished teachers with an in-depth understanding of the subject.',
      image: Faculty
    },
    {
        id: 2,
        title: 'Cutting Edge Curriculum',
        description: 'Educate yourself with the top-notch study material designed by the EXPERTS.',
        data_src:'',
        image: Edge_cur
    },
    {
      id: 3,
      title: 'Live Classes',
      description: 'Learn concepts, practice questions & get your doubts cleared instantly in the LIVE Classes.',
      data_src:'',
      image: liveclass
    },
    {
      id: 4,
      title: 'Student Discussion Forum',
      description: 'Get access to 24*7 Live Discussion group with batchmates & faculties.',
      data_src:'',
      image: diss_forum
    },
    {
        id: 5,
        title: 'Quiz & Assignments',
        description: 'Practice chapter-wise Quizzes & solve Assignments to learn and revise concepts.',
        data_src:'',
        image: assignment_test 
    },
      {
        id: 6,
        title: 'Video Lectures',
        description: 'Learn through high-quality & easy to understand video lectures.',
        data_src:'',
        image: video_lect
      },
      {
        id: 7,
        title: 'E-Book',
        description: 'Get Important topics & formulas for last-minute revision in the PDF format.',
        data_src:'',
        image: E_book
      },
      {
        id: 8,
        title: 'Alert & Notification',
        description: 'Stay up to date & get notified every time the course content is updated.',
        data_src:'',
        image: notification
      },
      {
        id: 9,
        title: 'Trusted Content',
        description: 'Learn from the comprehensive & interactive course content.',
        image: trust_icon 
      },{
        id: 10,
        title: 'Affordable Fee Structure',
        description: 'Learn from the best in the industry with an affordable payment plan.',
        data_src:'',
        image: fee_afford 
      },{
        id: 11,
        title: 'Online & Offline Video lectures',
        description: 'Learn even when you are offline through our in-app video lectures.',
        data_src:'',
        image: offline_video 
      },{
        id: 12,
        title: 'Learn Anytime Anywhere',
        description: 'Learn at your own pace through our easy to navigate Responsive Website.',
        data_src:'',
        image: anytime_anywhere
      },
      
  ];
  
  export default courseData;
  