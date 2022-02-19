import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
	const [data, setData] = useState(initialData);
	const [request_Status, setRequest_Status] = useState(REQUEST_STATUS.LOADING);
	const [error, setError] = useState("");
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(async () => {
		try {
			await delay(delayTime);
			setRequest_Status(REQUEST_STATUS.SUCCESS);
			setData(data);
		} catch (e) {
			setRequest_Status(REQUEST_STATUS.FAILURE);
			setError(e);
		}
	}, []);

	function updateRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = data.map(function (rec) {
			return rec.id === record.id ? record : rec;
		});
		async function delayFunction() {
			try {
				setData(newRecords);
				await delay(delayTime);
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
				await delay(delayTime);
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

	function insertRecord(record, doneCallback) {
		const originalRecords = [...data];
		const newRecords = [record, ...data];
		async function delayFunction() {
			try {
				setData(newRecords);
				debugger;
				await delay(delayTime);
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
		request_Status,
		error,
		updateRecord,
		insertRecord,
		deleteRecord,
	};
}

export default useRequestDelay;
