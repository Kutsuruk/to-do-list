import React, {FC} from "react";

const TodoTask: FC = () => {

    interface TodoTaskProps {
        taskName: string;
        completed: boolean;
    }

    return(
        <>
            Task
        </>
    )
}

export default TodoTask;