# vendor-fullstack
Vendor Management

Vendor Application-

USER- Prashant Gupta
Stack Used- VUE + NODE + SQLite

<!-- Steps for run the Project- -->
1) Clone the url
2) go in frontend folder and run - npm install
3) go in backend-node and run- npm install
4) open the url in browser- http://localhost:5173/

<!-- Task 1- Implement a delete functionality to allow users to remove vendor entries from the system
- Include a confirmation dialog before deletion to prevent accidental removal.
- Update both frontend and your chosen backend to support this feature -->

USER Answer- I implemented the delete functionality on both the frontend and backend. When deleting a user, a custom confirmation popup appears, displaying the ID of the user being deleted. Upon confirming the deletion, a toast notification appears at the top-right corner indicating that the user has been successfully deleted, and the vendor list is updated accordingly.

<!-- Task 2) Currently, clicking the "Add" button multiple times before the form resets can result in duplicate vendor entries.
- Prevent this behavior to improve the form UX -->

USER Answer- After the form is submitted, I reset it immediately. However, the user can't submit the form a second time because all the required fields are now empty.

<!-- Task 3)  Ensure that vendor emails are unique across the system. If a user tries to register a vendor with a duplicate email, they should be informed of the conflict. 
  Think about where this logic should live and how the constraint is best enforced (frontend, backend, data storage or all) and justify your approach
- Document your reasoning -->

USER Answer- So below approach I'm doing

Backend- whiles adding the newuser First I'm checking, data is there or not If there are some data so first converting the email in lowercase because a user can have multiple email like test@gmail.com, Test@gmail.com, TEST@gmail.com. after that via query first checking email is already there or not If it's there then returning the status code 409 with some error message. If this is new user with new email so directly saving in db.

Frontend- I'm injecting the service into the component, and on form submission, I'm checking the response. If the user is new and the data is valid, the registration is successful. If not, I display the error message returned from the backend using a toaster notification on the UI.

<!-- Task 4) Deployment -->

USER Answer- Instead of deployment attaching the zip file and git link. Normally deployment handled by devops team so what I know for simple static site we can deploy on netlify or GitHub but I'm learning the deployment process.

4. In your readme.md file, also answer the following questions:
    <!-- 1. What do I love most about being a software engineer. -->
    User Answer- What I appreciate most about being a software engineer is the opportunity to transform ideas into meaningful and impactful solutions. I find great satisfaction in tackling complex challenges, continuously exploring new technologies, and contributing to systems that are both efficient and user-friendly. It’s truly fulfilling to know that my work can simplify processes, support users, and create value through thoughtful, well-crafted code.

    <!-- 2. What is most important to me when it comes to working in a team -->
    User Answer- When working in a team is open communication, mutual respect, and a shared commitment to the team's goals. I value a collaborative environment where everyone feels heard and supported, and where diverse perspectives are welcomed. It's important to me that team members are reliable, proactive, and willing to help each other grow—because that’s what drives both individual and collective success.

    3. What is the worst part of being a software engineer.
    User Answer- One of the more challenging aspects of being a software engineer is dealing with ambiguity—whether it's unclear requirements, shifting priorities, or legacy systems with little documentation. It can also be tough to keep up with the fast pace of technological change. However, I see these challenges as opportunities to grow, ask better questions, and continuously improve both my technical and problem-solving skills.




