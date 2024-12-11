import { AuthHook } from "../../resources/auth-hook";

export class Results {
  static dependencies = [AuthHook];

  // Mock data
  faculties = [
    { value: 1, label: "Faculty 1"},
    { value: 2, label: "Faculty 2"},
    { value: 3, label: "Faculty 3"},
  ];

  // Selected faculty
  selectedFaculty = 1;

  // Mock data
  facultyResults = {
    1: [
      { credits: 5, code: 'F1.101', name: 'Course 1', grade: '4' },
      { credits: 5, code: 'F1.102', name: 'Course 2', grade: '4' },
      { credits: 5, code: 'F1.103', name: 'Course 3', grade: '4' },
      { credits: 5, code: 'F1.104', name: 'Course 4', grade: '4' },
    ],
    2: [
      { credits: 5, code: 'F2.201', name: 'Course 3', grade: '4' },
      { credits: 5, code: 'F2.202', name: 'Course 4', grade: '4' },
      { credits: 5, code: 'F2.203', name: 'Course 5', grade: '4' },
    ],
    3: [
      { credits: 5, code: 'F3.301', name: 'Course 5', grade: '4' },
      { credits: 5, code: 'F3.302', name: 'Course 6', grade: '4' },
    ]
  };

  get results() {
    return this.facultyResults[this.selectedFaculty] || [];
  }
}