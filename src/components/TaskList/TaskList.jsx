import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './completeTask';
import NewTask from './NewTask';
import FaildTask from './FaildTask';

const TaskList = ({data}) => {
    console.log( "TAsk list",data)

    return (
        <div id='tasklst' className='flex items-center gap-5 h-[55%] flex-nowrap overflow-x-auto  py-5 w-full mt-8'>
             
             {data.tasks.map((e , idx)=>{
                if (e.active) {
                   return  <AcceptTask data = {e} key={idx}/>
                }
                if (e.completed) {
                    return <CompleteTask data = {e} key={idx}/>
                }
                if (e.failed) {

                    return <FaildTask data = {e} key={idx}/>
                }
                if(e.newTask){
                    return <NewTask data = {e} key={idx}/>
                }
             })}
             
             
        </div>
    );
}

export default TaskList;
