import Asana from "asana";

import buildAsanaClient from "./buildAsanaClient";

const markTaskComplete = async (
    taskId: string | number
): Promise<Asana.resources.Tasks.Type> => {
    const asana = buildAsanaClient();

    return await asana.tasks.update(taskId, { completed: true });
};

export default markTaskComplete;
