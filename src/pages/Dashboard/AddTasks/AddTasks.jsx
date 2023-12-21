import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AddTasks = () => {
    const { user } = useContext(AuthContext)

    const { register, reset, handleSubmit } = useForm()

    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        
        
        
            const newTask = {
                taskTitle: data.taskTitle,
                taskPriority: data.taskPriority,
                description: data.description,
                date: data.dateTime,
                userEmail: user.email,
                userName: user.displayName

            }
            console.log(newTask)

            const taskRes = await axiosPublic.post('/tasks', newTask)
            if (taskRes.data.insertedId) {

                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Task is added to the Tasks.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            
        }
        
    }

    return (
        <div className="bg-[#b0b0ae] max-w-6xl min-h-screen  mx-auto p-8 md:p-12 ">
            <h2 className="text-center text-3xl font-bold mb-8" >Add a Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* form Meal title and reviews row */}
                <div className="md:flex gap-0 md:gap-4 mb-6 ">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Task title</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("taskTitle", { required: true })} name="taskTitle" placeholder="Enter Task Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Task Priority</span>
                        </label>
                        <select defaultValue={"default"} {...register("taskPriority", { required: true })} name="taskPriority" className="select select-bordered  ">
                            <option value="default" disabled>Pic a Priority </option>
                            <option >Low</option>
                            <option  >Moderate</option>
                            <option  >High</option>


                        </select>

                    </div>
                </div>

                
               
                {/* form description and Job Rating */}
                <div className="md:flex gap-0 md:gap-4 mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" {...register("description")} name="description" placeholder="Enter Meal Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Datelines</span>
                        </label>
                        <label className="input-group">

                            <input type="date" {...register("dateTime")} name="dateTime" placeholder="Enter Date Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <button type="submit" className="btn flex-1 text-white text-sm md:text-lg btn-block bg-[#109e95] hover:bg-[#0a9b91] mb-2">Add task</button>

                </div>
            </form>
           
        </div>
    );
};

export default AddTasks;