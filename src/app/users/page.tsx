export default function Users () {
  return (
    <>
      <h1 className='bg-red text-3xl font-bold underline'>Users</h1>
      <div className='flex flex-col sm:p-5 border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='overflow-hidden'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Name</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Age</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Address</th>
                    <th scope='col' className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>John Brown</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>45</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>New York No. 1 Lake Park</td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a className='text-blue-500 hover:text-blue-700' href='#'>Delete</a>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>Jim Green</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>27</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>London No. 1 Lake Park</td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a className='text-blue-500 hover:text-blue-700' href='#'>Delete</a>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>Joe Black</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>31</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>Sidney No. 1 Lake Park</td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a className='text-blue-500 hover:text-blue-700' href='#'>Delete</a>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>Edward King</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>16</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>LA No. 1 Lake Park</td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a className='text-blue-500 hover:text-blue-700' href='#'>Delete</a>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>Jim Red</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>45</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>Melbourne No. 1 Lake Park</td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a className='text-blue-500 hover:text-blue-700' href='#'>Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
