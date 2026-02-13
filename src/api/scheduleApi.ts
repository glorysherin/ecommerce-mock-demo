import { encode } from 'base-64'

export const loginAndFetchData = async () => {
  try {
    const response = await fetch(
      'https://navigator-api.azurewebsites.net/externalSF/?dev=false',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          // ✅ Basic Auth header
          Authorization: 'Basic ' + encode('BibleTruth:Jesus'),
        },
        body: JSON.stringify({
          message: {
            action: 'login',
            loginRequest: {
              email: 'phil.hinton+test@eacamps.org',
              pass: 'Camp1234',
            },
          },
        }),
      }
    )

    const resdata = await response.json()

    // const scheduleItemObj = resdata.data.find((obj: { scheduleitem: any; }) => obj.scheduleitem);
    // const scheduleItems = resdata.data[5]


    // console.log(scheduleItems);

    // console.log('🔥 FULL API RESPONSE:', JSON.stringify(scheduleItems, null, 2))
    // // console.log('🔥 FULL API RESPONSE:', JSON.stringify(scheduleItemObj, null, 2))

    // return scheduleItems
      // 🔥 get schedule array properly
    const scheduleArray = resdata?.data?.[5]?.scheduleItems || []

    console.log('🔥 SCHEDULE ARRAY:', JSON.stringify(scheduleArray, null, 2))

    return scheduleArray   // ✅ return array only
  } catch (error) {
    console.log('❌ API ERROR:', error)
  }
}


