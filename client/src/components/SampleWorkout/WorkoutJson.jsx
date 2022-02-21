// 
// import tab from './../Features/FeaturesTab.json'
// 
// function WorkoutJson() {
//     return (
//         <div>
//             <div>
//                 {tab.map((data, i) => {
//                     return(
//                         <div key={i}>
//                             {data.tabHeading}
//                             {data.tabDescription}
//                             {tab.map((r) => r.list1.map((g) => {
//                                 return(
//                                     <div key={i}>
//                                 {g.icon}
//                                 {g.iconHeading}
//                                 {g.iconDescriptoion}
//                                 </div>) } ))}
//                            
//                         </div>
//                     )
//                 })}
//             </div>
//             <table border="2">
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Department</th>
//                         <th>Age</th>
//                         <th>RollNo</th>
//                         <th>Subjcet</th>
//                     </tr>
//                     {Students.students.map((item, i) => (
//                         <tr key={i}>
//                             <td>{item.name}</td>
//                             <td>{item.department}</td>
//                             <td>{item.age}</td>
//                             <td>{item.rollno}</td>                         
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
// 
//     );
// }
// 
// export default WorkoutJson
