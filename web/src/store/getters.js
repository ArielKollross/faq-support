export default {
  getIssues(state) {
    return state.issues;
  },

  getIssueFilteredById: state => id => {
    const issue = state.issues.find( issue => {
      return issue.id == id;
    });
    return issue;
  }
};