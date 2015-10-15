###Car selection is incorrect when selecting Blue paint.###

When selecting the Blue paint from Msc 221 the configurator is returning the wrong vehicle.

**Acceptance criteria:**
If any item applied to the configuration is not allowed then it should start at index 0 of the mscs and work its way through each index for the first vehicle that is allowed the item passed to the ```getConfigurationWith()``` function.

**Steps to reproduce:**
1. Call ```getConfigurationWith()``` on the ```ConfigurationBasicQuery``` class with **'blue'**, type **'color'** and configuration object matching MSC **221**.

**Expected result:**
The configuration object returned has an msc property value of **111** and the color value of **blue**.

**Actual result:**
The configuration object returned has an msc property value of **221** and the color value of **blue**.
