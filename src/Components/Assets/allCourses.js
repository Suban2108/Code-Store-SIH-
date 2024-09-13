
    const all_courses = [
        // Data Structures
        {
          id:1,
          title: 'Introduction to Data Structures',
          category: 'Data Structures',
          description: '10 weeks, Beginner',
          old_price: 100,
          new_price: 49.99,
          imageurl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ji69HYeNqt2YPsYqeR_61Vzx3YcQpVT8cg&s"
        },
        {
          id:2,
          title: 'Advanced Data Structures',
          category: 'Data Structures',
          description: '12 weeks, Advanced',
          old_price: 100,
          new_price: 69.99,
          imageurl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ji69HYeNqt2YPsYqeR_61Vzx3YcQpVT8cg&s"
        },
    
        // Algorithms
        {
          id:3,
          title: 'Advanced Algorithms',
          category: 'Algorithms',
          description: '8 weeks, Advanced',
          old_price: 100,
          new_price: 59.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230316121305/Complexity-Analysis-A-complete-reference-(1).png"
        },
    
        {
          id:4,
          title: 'Graph Algorithms',
          category: 'Algorithms',
          description: '9 weeks, Advanced',
          old_price: 100,
          new_price: 69.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230316121305/Complexity-Analysis-A-complete-reference-(1).png"
        },
        {
          id:5,
          title: 'Algorithms in Python',
          category: 'Algorithms',
          description: '7 weeks, Intermediate',
          old_price: 100,
          new_price: 49.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230316121305/Complexity-Analysis-A-complete-reference-(1).png"
        },
    
        // Operating Systems
    
        {
          id:6,
          title: 'Introduction to Linux Systems',
          category: 'Operating Systems',
          description: '8 weeks, Beginner',
          old_price: 100,
          new_price: 59.99,
          "imageurl":
              "https://i.pcmag.com/imagery/roundups/03HzxsBLnETBkBt5BrRsFIY-1.fit_lim.size_850x490.v1643742425.jpg"
        },
        {
          id:7,
          title: 'Windows Operating System Internals',
          category: 'Operating Systems',
          description: '10 weeks, Intermediate',
          old_price: 100,
          new_price: 64.99,
          "imageurl":
              "https://i.pcmag.com/imagery/roundups/03HzxsBLnETBkBt5BrRsFIY-1.fit_lim.size_850x490.v1643742425.jpg"
        },
        {
          id:8,
          title: 'Real-Time Operating Systems',
          category: 'Operating Systems',
          description: '11 weeks, Advanced',
          old_price: 100,
          new_price: 74.99,
          "imageurl":
              "https://i.pcmag.com/imagery/roundups/03HzxsBLnETBkBt5BrRsFIY-1.fit_lim.size_850x490.v1643742425.jpg"
        },
    
        // Computer Networks
        {
          id:9,
          title: 'Computer Networks: Basics to Advanced',
          category: 'Computer Networks',
          description: '9 weeks, Intermediate',
          old_price: 100,
          new_price: 54.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg"
        },
        {
          id:10,
          title: 'Introduction to Computer Networks',
          category: 'Computer Networks',
          description: '8 weeks, Beginner',
          old_price: 100,
          new_price: 49.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg"
        },
        {
          id:11,
          title: 'TCP/IP Protocol Suite',
          category: 'Computer Networks',
          description: '12 weeks, Advanced',
          old_price: 100,
          new_price: 74.99,
          imageurl:
              "https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg"
        },
    
        // DBMS
        {
          id:12,
          title: 'Introduction to DBMS',
          category: 'DBMS',
          description: '11 weeks, Beginner',
          old_price: 100,
          new_price: 64.99,
          imageurl:
              "https://smsvaranasi.com/uploads/news/79/The-Considerations-And-Perks-Of-Choosing-A-DBMS-ITs-Guru.png"
        },
        {
          id:13,
          title: 'Database Design and Management',
          category: 'DBMS',
          description: '12 weeks, Intermediate',
          old_price: 100,
          new_price: 74.99,
          imageurl:
              "https://smsvaranasi.com/uploads/news/79/The-Considerations-And-Perks-Of-Choosing-A-DBMS-ITs-Guru.png"
        },
        {
          id:14,
          title: 'Data Warehousing',
          category: 'DBMS',
          description: '14 weeks, Advanced',
          old_price: 100,
          new_price: 79.99,
          imageurl:
              "https://smsvaranasi.com/uploads/news/79/The-Considerations-And-Perks-Of-Choosing-A-DBMS-ITs-Guru.png"
        },
    
        // Cyber Security
        {
          id:15,
          title: 'Cyber Security Essentials',
          category: 'Cyber Security',
          description: '10 weeks, Intermediate',
          old_price: 100,
          new_price: 59.99,
          imageurl:
              "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg"
        },
        {
          id:16,
          title: 'Ethical Hacking',
          category: 'Cyber Security',
          description: '12 weeks, Advanced',
          old_price: 100,
          new_price: 74.99,
          imageurl:
              "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg"
        },
    
        // Artificial Intelligence
        {
          id:17,
          title: 'Artificial Intelligence and Machine Learning',
          category: 'Artificial Intelligence',
          description: '14 weeks, Advanced',
          old_price: 100,
          new_price: 79.99,
          imageurl:
              'https://media.licdn.com/dms/image/v2/D5612AQHjDGhc8cNfJA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704439037481?e=1730332800&v=beta&t=h_Sq1eGjIiKQF97jfdDvevDKH2mxVhvJ2jt2Lr_Vn1o'
        },
    
        {
          id:18,
          title: 'Reinforcement Learning',
          category: 'Artificial Intelligence',
          description: '16 weeks, Advanced',
          old_price: 100,
          new_price: 89.99,
          imageurl:
              'https://media.licdn.com/dms/image/v2/D5612AQHjDGhc8cNfJA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704439037481?e=1730332800&v=beta&t=h_Sq1eGjIiKQF97jfdDvevDKH2mxVhvJ2jt2Lr_Vn1o'
        },
        // Programming Languages
        {
          id:19,
          title: 'Mastering Python: From Basics to OOP',
          category: 'Programming Languages',
          description: '7 weeks, Beginner',
          old_price: 100,
          new_price: 39.99,
          "imageurl":
              "https://loudbench.com/wp-content/uploads/2023/02/Python-logo-696x392.png"
        },
        {
          id:20,
          title: 'Java Programming for Beginners',
          category: 'Programming Languages',
          description: '10 weeks, Beginner',
          old_price: 100,
          new_price: 49.99,
          imageurl:
              'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png'
        },
        {
          id:21,
          title: 'C++ Programming Essentials',
          category: 'Programming Languages',
          description: '12 weeks, Intermediate',
          old_price: 100,
          new_price: 59.99,
          "imageurl": "https://cloud.google.com/static/cpp/images/cpp-logo.png"
        },
        {
          id:21,
          title: 'Advanced JavaScript Concepts',
          category: 'Programming Languages',
          description: '8 weeks, Intermediate',
          old_price: 100,
          new_price: 54.99,
          imageurl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*LyZcwuLWv2FArOumCxobpA.png"
        },
        {
          id:22,
          title: 'Functional Programming with Scala',
          category: 'Programming Languages',
          description: '14 weeks, Advanced',
          old_price: 100,
          new_price: 69.99,
          imageurl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCIzfauH5P4Lz0giB2mxbnKkJ8Kn4tT-zEw&s"
        },
    
        // Mobile Development
        {
          id:23,
          title: 'Developing Android Apps with Kotlin',
          category: 'Mobile Development',
          description: '10 weeks, Intermediate',
          old_price: 100,
          new_price: 64.99,
          "imageurl":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpZjviaGLAT52je89zklZqJzcX0-IBhJQA&s"
        },
        {
          id:24,
          title: 'iOS App Development with Swift',
          category: 'Mobile Development',
          description: '12 weeks, Intermediate',
          old_price: 100,
          new_price: 69.99,
          "imageurl":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpZjviaGLAT52je89zklZqJzcX0-IBhJQA&s"
        },
    
        {
          id:25,
          title: 'Flutter Development for Beginners',
          category: 'Mobile Development',
          description: 'Learn the basics of Flutter and how to build beautiful, high-performance mobile apps. This course covers essential widgets, state management, and best practices for starting your journey in mobile app development',
          old_price: 100,
          new_price: 59.99,
          "imageurl":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpZjviaGLAT52je89zklZqJzcX0-IBhJQA&s"
        },
    
        {
          id:26,
          title: 'Introduction to Cloud Computing',
          category: 'Cloud Computing',
          description: '8 weeks, Beginner',
          old_price: 100,
          new_price: 59.99,
          imageurl:
              "https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing-and-How-Can-it-Benefit-Our-Company-1024x512.jpeg"
        },
        {
          id:27,
          title: 'Big Data Analytics with Hadoop',
          category: 'Big Data',
          description: '12 weeks, Advanced',
          old_price: 100,
          new_price: 74.99,
          imageurl:
              "https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f1a5c164b271a7cd531_data-analysis-1024x576.webp"
        },
        {
          id:28,
          title: 'Data Analytics with Python',
          category: 'Data Analytics',
          description: '10 weeks, Intermediate',
          old_price: 100,
          new_price: 69.99,
          imageurl:
              "https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f1a5c164b271a7cd531_data-analysis-1024x576.webp"
        },
        {
          id:29,
          title: 'IoT Development with Raspberry Pi',
          category: 'Internet of Things (IoT)',
          description: '11 weeks, Advanced',
          old_price: 100,
          new_price: 79.99,
          imageurl:
              "https://spin.atomicobject.com/wp-content/uploads/raspberry-pi-1.jpg"
        },
        {
          id:30,
          title: 'Robotics: Basics and Applications',
          category: 'Robotics',
          description: 'Explore the fundamental concepts of robotics and their practical applications. Understand the core components of robotic systems and how they are used in real-world scenarios',
          old_price: 100,
          new_price: 69.99,
          imageurl:
              "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2023/07/25174434/efc290acf4d2f1573b4a87aa3999508b.png"
        },
        {
          id:31,
          title: 'Software Engineering Principles',
          category: 'Software Engineering',
          description: '9 weeks, Beginner',
          old_price: 100,
          new_price: 54.99,
          imageurl:
              "https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing-and-How-Can-it-Benefit-Our-Company-1024x512.jpeg"
        },
    ]

export default all_courses;