import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  	render() {
    	return (
			<div>
				<ul id ="sem1">
					<li>Semester 1
						<ul id ="sub1">
						<li>Communicative English</li>
						<li>Engineering Maths 1</li>
						<li>Engineering Physics</li>
						<li>Engineering Chemistry</li>
						<li>Proplem solving & Python Programming</li>
						<li>Engineering Graphics</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem2">
					<li>Semester 2
						<ul id ="sub2">
						<li>Technical English</li>
						<li>Engineering Maths 2</li>
						<li>Physics for information science</li>
						<li>BEEM</li>
						<li>Environmental science & Engineering</li>
						<li>Programming in C</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem3">
					<li>Semester 3
						<ul id ="sub3">
						<li>Digital Principles & Designs</li>
						<li>Discrete Mathematics</li>
						<li>Data Structure</li>
						<li>Object Oriented Programming</li>
						<li>Communication Engineering</li>
						<li>Interpersonal Skills / Listening & Speaking</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem4">
					<li>Semester 4
						<ul id ="sub4">
						<li>Probability & queueing Theory</li>
						<li>Computer Architecture</li>
						<li>DataBase Management System</li>
						<li>Design & Analysis of Algorithm</li>
						<li>Operating System</li>
						<li>Software Engineering</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem5">
					<li>Semester 5
						<ul id ="sub5">
						<li>Algebra & Number Theory</li>
						<li>Computer Networks</li>
						<li>Microprocessor & Microcontroller</li>
						<li>Theory of Computation</li>
						<li>Object Oriented Analysis & Design</li>
						<li>Geographic information System</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem6">
					<li>Semester 6
						<ul id ="sub6">
						<li>Internet Programming</li>
						<li>Artificial Intelligence</li>
						<li>Mobile Computing</li>
						<li>Compiler Design</li>
						<li>Distributed System</li>
						<li>Data Warehouse & Data Mining</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem7">
					<li>Semester 7
						<ul id ="sub7">
						<li>Principles of Management</li>
						<li>Cryptography & Network Security</li>
						<li>Cloud Computing</li>
						<li>Big Data Analytics</li>
						<li>Hospital Management</li>
						<li>Multi Core Architecture & Programming</li>
						</ul>
					</li>
				</ul>
				<ul id ="sem8">
					<li>Semester 8
						<ul id ="sub8">
						<li>Professional Ethics Engineering</li>
						<li>Information Retrival Techniques</li>
						</ul>
					</li>
				</ul>
			</div>
		
		);
  	}
}
ReactDOM.render(<Car/>, document.getElementById('root'));

