export async function getStudentData(){
      const result = await fetch('http://localhost:3001/students/list',{
        method: 'GET'
      }).then((response)=> response.json())
      return result;
  }
