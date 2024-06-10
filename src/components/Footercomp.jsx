import React from "react";

function Footercomp() {
  return (
    <footer class="bg-[#fbd875] shadow m-4 dark:bg-gray-800 w-full mx-auto my-0 outline">
      <div class=" mx-auto w-full p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-[#04023c] sm:text-center dark:text-gray-400">
          © 2024 Yanuar . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-[#04023c] dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footercomp;
