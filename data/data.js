import Image from "next/image";

import image1 from "../img/post/post1.jpg";
import image2 from "../img/post/post2.jpg";
import image3 from "../img/post/post3.jpg";
import image4 from "../img/post/post4.jpg";
import image5 from "../img/post/post5.jpg";
import image6 from "../img/post/post6.jpg";
import image7 from "../img/post/post7.jpg";
import avatar1 from "../img/post/avatar1.jpg";
import avatar2 from "../img/post/avatar2.jpg";
import avatar3 from "../img/post/avatar3.jpg";
import avatar4 from "../img/post/avatar4.jpg";
import avatar5 from "../img/post/avatar5.jpg";
import avatar6 from "../img/post/avatar6.jpg";
import avatar7 from "../img/post/avatar7.jpg";


export function postData() {
  const postData = [
    {
      id: 1,
      title: "Data exported by Team Cloud organization administrators contained private files",
      name: "Mark Brooklyn",
      userImg: <Image src={avatar1} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "June 14, 2023",
      image: <Image src={image1} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 2,
      title: "Swap long video calls and emails for asynchronous video",
      name: "Robert Fox",
      userImg: <Image src={avatar2} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "June 21, 2023",
      image: <Image src={image2} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 3,
      title: "Flexibility reigns: six key takeaways from Frontiers 2023",
      name: "Jenny Wilson",
      userImg: <Image src={avatar3} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "June 10, 2023",
      image: <Image src={image3} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 4,
      title: "Team plus Sales Cloud: Your sales team’s new digital HQ",
      name: "Kathryn Murphy",
      userImg: <Image src={avatar4} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "May 11, 2023",
      image: <Image src={image4} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 5,
      title: "What is digital culture?",
      name: "Devon Lane",
      userImg: <Image src={avatar5} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "May 22, 2023",
      image: <Image src={image5} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 6,
      title: "Steve Dotto’s top 10 tips for overcoming workplace hiccups",
      name: "Theresa Webb",
      userImg: <Image src={avatar6} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "April 4, 2023",
      image: <Image src={image6} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 7,
      title: "What’s new in Team: iPad updates, split-screen view and more",
      name: "Eleanor Pena",
      userImg: <Image src={avatar7} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "March 18, 2023",
      image: <Image src={image7} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
    {
      id: 8,
      title: "Data exported by Team Cloud organization administrators contained private files",
      name: "Mark Brooklyn",
      userImg: <Image src={avatar1} alt="avatar" width={40} height={40} priority="false"/>,
      job: "COO at Team. Author of the upcoming book on Team Management and Leadership.",
      date: "June 14, 2023",
      image: <Image src={image1} alt="image" width={260} height={200} priority="false"/>,
      text: "Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports. This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release. We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected. We would like to thank Antoine Benoist for bringing this issue to our attention."
    },
  ]

  return postData
}