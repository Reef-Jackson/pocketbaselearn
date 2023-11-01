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
    deleteItem: async ({ request, locals }) => {
        
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
    },
    addItem: async ({request, locals}) => {
        const data = await request.formData();
        console.log(...data)
        const bucketText = data.get('bucket_text');
        console.log(bucketText);

        try {
            const response = await databaseHandler.addItem(data);
            if (response.success) {
                console.log("Adding Success");
            } else {
                console.log("Error adding from server.js");
            }
        } catch (e) {
            console.error(e);
        }
    }
}

