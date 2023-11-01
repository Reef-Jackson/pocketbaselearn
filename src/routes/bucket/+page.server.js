import databaseHandler from "$lib/server/databaseHandler";

export async function load({ params }) {
    try {
        const records = await databaseHandler.populatePage();
        return {
            record: await databaseHandler.populatePage()
        }
    } catch (error) {
        console.error("error fetching data:", error);
        return {
            status: 500,
            body: {
                error: 'An error has occured',
            },
        };
    }
}

export const actions = {
    default: async ({ request, locals }) => {
        
        const data = await request.formData();
        console.log(...data)
        const recordId = data.get('record_id');
        console.log(recordId);
        
        try {
            const response = await databaseHandler.deleteItem(recordId);
            if (response.success) {
                console.log("Success");
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);
        }
    }
}

