const WarningComponent = () => {
  return (
    <div class="flex items-center mx-auto h-[15vh] m-4 justify-center max-w-2xl bg-orange-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p class="font-normal text-white dark:text-gray-400">
        <b>Please enter the keyword to search!</b>
      </p>
    </div>
  );
};

export default WarningComponent;
