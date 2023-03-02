import Link from "next/link";

const NewsSource = ({ sources }) => {
  return (
    <div class="border-2 rounded-md xs:m-[30px] sm:m-[20px] lg:m-[50px] bg-veryLightGray">
      <div >
        <h3 class="text-3xl  pl-2 font-bold text-darkBlue">
          {sources.name}
        </h3>
      </div>
      <div>
        <h4 class="text-md pt-3 pl-2 font-semibold">{sources.description}</h4>
      </div>
      <div>
        <div class="flex">
          <h4 class="text-md pt-3  pl-2 font-bold text-darkBlue">Category</h4>
          <h4 class="text-md pt-3 pl-2 font-semibold">
            {sources.category.toUpperCase()}
          </h4>
        </div>
        <div class="flex">
          <h4 class="text-md pl-2 font-bold text-darkBlue">Country:</h4>
          <h4 class="text-md pl-2 font-semibold">
            {sources.country.toUpperCase()}
          </h4>
        </div>
        <div class="flex">
          <h4 class="text-md pl-2 font-bold text-darkBlue">
            More Information:
          </h4>
          <a href={sources.url} target="_blank">
            <h4 class="text-md pl-2 pb-2 font-bold text-darkBlue underline">
              {sources.url}
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSource;
