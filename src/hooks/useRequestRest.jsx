import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILURE: "failure",
};

const restUrl = "api/speakers";

function useRequestRest() {
	const [data, setData] = useState([]);
	const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
	const [error, setError] = useState("");
	// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	useEffect(() => {
		async function delayFunc() {
			try {
				const result = await axios.get(restUrl);
			
				setRequestStatus(REQUEST_STATUS.SUCCESS);
				setData(result.data);
			} catch (e) {
				setRequestStatus(REQUEST_STATUS.FAILURE);
				setError(e);
			}
		}
		delayFunc();
	}, []);

	function updateRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = data.map(function (rec) {
			return rec.id === record.id ? record : rec;
		});
		async function delayFunction() {
			try {
				setData(newRecords);
				await axios.put(`${restUrl}/${record.id}`, record);
				if (doneCallback) {
					doneCallback();
				}
			} catch (error) {
				console.log("error thrown inside delayFunction", error);
				if (doneCallback) {
					doneCallback();
				}
				setData(originalRecords);
			}
		}
		delayFunction();
	}

	function deleteRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = data.filter(function (rec) {
			return rec.id != record.id;
		});
		async function delayFunction() {
			try {
				setData(newRecords);
				await axios.delete(`${restUrl}/${record.id}`, record);
				if (doneCallback) {
					doneCallback();
				}
			} catch (error) {
				console.log("error thrown inside delayFunction", error);
				if (doneCallback) {
					doneCallback();
				}
				setData(originalRecords);
			}
		}
		delayFunction();
	}

	// The insertRecord code below is corrected per this discussion in the course.
	//   The ID was not being carried back to state previously
	//  Also, need to correct useRequestDelay for the same issue which is earlier in the course

	function insertRecord(record, doneCallback) {
		const originalRecords = [...data];
		async function delayFunction() {
			try {
				const results = await axios.post(`${restUrl}/99999`, record);
				const { data: insertedRecord } = results;
				const newRecords = [insertedRecord, ...data];
				setData(newRecords);
				if (doneCallback) {
					doneCallback();
				}
			} catch (error) {
				console.log("error thrown inside delayFunction", error);
				if (doneCallback) {
					doneCallback();
				}
				setData(originalRecords);
			}
		}
		delayFunction();
	}

	return {
		data,
		requestStatus,
		error,
		updateRecord,
		insertRecord,
		deleteRecord,
	};
}

export default useRequestRest;
