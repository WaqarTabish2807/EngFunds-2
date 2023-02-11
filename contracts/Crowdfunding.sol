// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

contract ProjectFunding {
    struct Project {
        string name;
        string description;
        uint256 fundAmount;
        uint256 minimumContributionAmount;
        uint256 deadline;
    }

    Project public project;

    function createProject(
        string memory _name,
        string memory _description,
        uint256 _fundAmount,
        uint256 _minimumContributionAmount,
        uint256 _deadline
    ) public {
        project = Project(_name, _description, _fundAmount, _minimumContributionAmount, _deadline);
    }
}
