import React, { useState, useEffect } from "react";
import axios from "axios";

function SmsForm() {
  const [smsContent, setSmsContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [smsData, setSmsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null);
  const itemsPerPage = 10;

  const handleChange = (e) => {
    setSmsContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sms = {
      sms: smsContent,
    };
    axios
      .post("http://16.171.166.42/sms/", sms)
      .then((response) => {
        setAnswer(response.data);
        // Fetch updated SMS data after posting new SMS
        fetchSmsData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchSmsData = () => {
    axios
      .get("http://16.171.166.42/sms/")
      .then((response) => {
        // Reverse the order of SMS data
        setSmsData(response.data.payload.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch SMS data on component mount
    fetchSmsData();
  }, []);

  const getTotalPages = () => {
    return Math.ceil(smsData.length / itemsPerPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Close expanded row when changing the page
  };

  const handleRowClick = (rowIndex, message) => {
    if (message.length > 100) {
      setExpandedRow((prevRow) => (prevRow === rowIndex ? null : rowIndex));
    }
  };

  const getVisibleSms = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return smsData.slice(startIndex, endIndex);
  };

  return (
    <section
      id="sms-form"
      className="bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 py-12 brightness-90"
    >
      <div className="container mx-auto max-w-screen-md p-6 bg-gradient-to-b from-rose-100 to-orange-200 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">SMS Hunter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="inputText"
              className="block text-sm font-medium text-gray-500"
            >
              Enter SMS Text:
            </label>
            <textarea
              id="inputText"
              name="inputText"
              rows="6"
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter SMS Here ..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Detect Spam
            </button>
          </div>
          <div className="text-center mt-4">
            <p
              className={`${
                answer.status === 200
                  ? answer.payload.prediction === "Spam"
                    ? "text-red-600"
                    : "text-green-600"
                  : "text-orange-600"
              } font-semibold`}
            >
              {answer === ""
                ? ""
                : answer.status === 200
                ? answer.payload.prediction
                : "Error occurred"}
            </p>
          </div>
        </form>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">SMS History</h3>
          <table className="w-full bg-white border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Label</th>
              </tr>
            </thead>
            <tbody>
              {getVisibleSms().map((sms, index) => (
                <React.Fragment key={sms.id}>
                  <tr
                    className={`${
                      sms.label === "Spam"
                        ? "bg-red-100 hover:bg-red-200 cursor-pointer"
                        : "bg-green-100 hover:bg-green-200 cursor-pointer"
                    }`}
                    onClick={() => handleRowClick(index, sms.sms)}
                  >
                    <td className="py-2 px-4 border-b">
                      {sms.sms.substring(0, 100)}
                      {expandedRow === index && (
                        <div className="text-gray-700 mt-2 transition-all duration-500 ease-in-out h-[auto] overflow-hidden">
                          {sms.sms}
                        </div>
                      )}
                    </td>
                    <td
                      className={`py-2 px-4 border-b ${
                        sms.label === "Spam" ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {sms.label}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from(
              { length: getTotalPages() },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                className={`px-3 py-2 rounded-md ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmsForm;
