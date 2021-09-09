import React, {useState} from 'react';

const useStudent = (initStudents) => {
	const [students, setStudents] = useState(initStudents);

	const removeStudent = (name) => {
		const index = students.indexOf(name);
		if (index !== -1) {
			students.splice(index, 1);
			setStudents([...students]);
		}
	};

	return [students, removeStudent];

}

const App = () => {
	const [students, removeStudent] = useStudent(['Huyen', 'Hoa', 'Hung', 'Long']);
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		removeStudent(value);
	};

	return (
		<div>
			<div>学生一覧： {['Huyen', 'Hoa', 'Hung', 'Long'].join(', ')}</div>
      <div></div>
			<div>削除値名前を入力してください。  </div>
			<input value={value} onChange={handleChange} /><br/>
			<button onClick={handleSubmit}>確定</button>
			<div>削除する名前： {value}</div>
			<div>新しい一覧：{students.join(', ')}</div>
		</div>
	);
}

export default App;
