import React from "react";
import kuvsh from "../assets/kuvshinki.png";
import group78 from "../assets/Group 78.png";
import ContentLoader from "react-content-loader";

const ResultsTable = ({ roundResult, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col relative">
        <img
          src={kuvsh}
          alt="KD"
          className="absolute top-[-120px] right-[-70px] z-20 hidden lg:block"
        />
        <img
          src={group78}
          alt="g78"
          className="absolute bottom-[-134px] right-[-106px] hidden lg:block"
        />
        <h1 className="font-lg400 text-acid text-2xl leading-7 mb-3">
          Last Rounds
        </h1>
        <div className="bg-uf rounded-2xl p-1 z-10 lg:p-8">
          <table className="">
            <thead>
              <tr>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Round No
                </th>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Date
                </th>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Numbers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-krona p-2 text-sm text-white leading-4">
                  <ContentLoader
                    speed={2}
                    width={64}
                    height={64}
                    viewBox="0 0 64 64"
                    backgroundColor="#7152df"
                    foregroundColor="#c7c7c7"
                  >
                    <rect x="0" y="0" rx="0" ry="0" width="64" height="64" />
                  </ContentLoader>
                </td>
                <td className="font-krona p-2 text-sm text-white leading-4">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={64}
                    viewBox="0 0 200 64"
                    backgroundColor="#7152df"
                    foregroundColor="#c7c7c7"
                  >
                    <rect x="0" y="0" rx="0" ry="0" width="200" height="64" />
                  </ContentLoader>
                </td>
                <td className="font-krona p-2 text-sm text-white leading-4">
                  <ContentLoader
                    speed={2}
                    width={300}
                    height={64}
                    viewBox="0 0 300 64"
                    backgroundColor="#7152df"
                    foregroundColor="#c7c7c7"
                  >
                    <rect x="0" y="0" rx="0" ry="0" width="300" height="64" />
                  </ContentLoader>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (roundResult) {
    return (
      <div className="flex flex-col relative">
        <img
          src={kuvsh}
          alt="KD"
          className="absolute top-[-120px] right-[-70px] z-20 hidden lg:block"
        />
        <img
          src={group78}
          alt="g78"
          className="absolute bottom-[-134px] right-[-106px] hidden lg:block"
        />
        <h1 className="font-lg400 text-acid text-2xl leading-7 mb-3">
          Last Rounds
        </h1>

        <div className="bg-uf rounded-2xl p-1 z-10 lg:p-8">
          <table className="">
            <thead>
              <tr>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Round No
                </th>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Date
                </th>
                <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                  Numbers
                </th>
              </tr>
            </thead>

            <tbody>
              {roundResult.map((data, index) => (
                <tr key={index}>
                  <td className="font-krona p-1 text-xs lg:p-2 lg:text-sm lg:leading-4 text-white">
                    {data.roundNo}
                  </td>
                  <td className="font-krona p-1 text-xs lg:p-2 lg:text-sm lg:leading-4 text-white">
                    {data.date} <br />
                    {data.time}
                  </td>
                  <td className="font-krona p-1 text-xs lg:p-2 lg:text-sm lg:leading-4 text-white">
                    <div className="flex">
                      {data.numbers.map((number, numberIndex) => (
                        <div
                          key={numberIndex}
                          className="bg-floweracid bg-cover w-[25px] h-[25px]  lg:w-[47px] lg:h-[48px] rounded-full flex items-center justify-center mr-1 lg:mr-2 font-jost text-xs lg:text-xl text-pressedviolet"
                        >
                          {number.toString()}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default ResultsTable;
