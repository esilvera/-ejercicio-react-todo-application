import React, { useState } from "react";
import Form from "./Form";

//create your first component
const Home = () => {
	const [list, setList] = useState([{ id: 1, task: "Tarea 1" }]);
	const [task, setTask] = useState("");

	const handleKeypress = evento => {
		// Verifica si se pulso la tecla enter
		if (evento.keyCode === 13) {
			handleSubmit(evento);
		}
	};

	const handleSubmit = evento => {
		evento.preventDefault();
		if (task.trim() === "") {
			//alert("Debe ingresar una Tarea");
			return;
		}
		let newTask = {
			id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
			task: task
		};
		let newList = [...list]; //Copia del array original
		newList.push(newTask);

		setList(newList);
		setTask("");
		evento.target.task.value = "";
	};

	const deleteTask = evento => {
		let newList = [...list];
		newList.splice(evento, 1);
		setList(newList);
	};

	return (
		<>
			{/* 			<div className="text-center mt-5">
				<h1>Componente Home</h1>
			</div> */}
			<Form
				handleSubmit={handleSubmit}
				handleKeypress={handleKeypress}
				deleteTask={deleteTask}
				setTask={setTask}
				task={task}
				list={list}
			/>
		</>
	);
};

export default Home;
