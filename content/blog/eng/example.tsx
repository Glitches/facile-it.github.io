type APICall<Tdata = {}, Terror = { error: "error" }> =
	| {
			status: "init";
	  }
	| {
			status: "submitted";
	  }
	| {
			status: "received";
			data: Tdata;
	  }
	| {
			status: "error";
			error: Terror;
	  };

function StastusManager(APICallStatus: APICall) {
	switch (APICallStatus.status) {
		case "submitted":
			return <div>LOADER</div>;
		case "init":
			return null;
		case "error":
			return (
				<div>
					<h1>Error: {APICallStatus.data}</h1>
				</div>
			);
		case "received":
			return <div>{APICallStatus.data}</div>;
	}
}
