export const lambdaHandler = async (event:any, context:any, callback:any) => {
    context.callbackWaitsForEmptyEventLoop = false
    console.info('Received event:', JSON.stringify(event))

    try {
        const result = 'Hello World'
        return Promise.resolve(result)
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}