(function(_, Backbone) {
    _.extend(Backbone.Model.prototype, {
        select: function(statement) {     
          var attr = this.attributes,
              isAttrStack = (_.isArray(attr)),
              selected = (isAttrStack) ? [] : {};

          // Check If the String has 'as' or return the Splitted Array.
          function alias(givenString, isExist) {
            var aliasArray = givenString.split(' as ');
            if(isExist) return (aliasArray.length > 1) ? true : false;
            return aliasArray;
          }

          // Check If the String has '.' or return the Splitted Array.
          function dot(givenString, isExist) {
            var dotArray = givenString.split('.');
            if(isExist) return (dotArray.length > 1) ? true : false;
            return dotArray;
          }

          // Check If the String has '[]' or return the matched string.
          function arg(givenString, isExist) {
            var argStack = givenString.match(/\[([^\]]+)]/), arg, givenArray;

            if(isExist) return (_.isArray(argStack)) ? (!_.isUndefined(argStack[1])) ? true : false : false;

            arg = argStack[1];
            fieldName = givenString.replace(argStack[0], '');
            givenArray = attr[fieldName];

            // Check If its Number.
            if(!_.isEmpty(givenArray[arg])) {
              return givenArray[arg];
            }
            // Check If its String.
            else if(_.isString(arg)) {
              var condition = arg.split(' && '),
                  where = {},
                  whereValue;
              for(index in condition) {
                var condInfo = condition[index].split('=');

                where[condInfo[0]] = condInfo[1];
              }

              whereValue = _.where(givenArray, where);
              
              return (whereValue.length > 1) ? whereValue : whereValue[0];
            }
          }

          // Get the Field Name Alias and their Value.
          function getFields(fieldsList, attr) {
            var selected = {};

            // Iterating each Fields.
            for(index in fieldsList) {

              var fieldInfo = (isFieldsArray) ? fieldsList[index].trim() :
                              (isFieldsObject) ? index.concat(' as ', fieldsList[index]) : '';

                if(alias(fieldInfo, true)) {
                  var aliasInfo = alias(fieldInfo);
                  fieldName = aliasInfo[0];
                  fieldAlias = aliasInfo[1];
                }
                else {
                  fieldName = fieldAlias = fieldInfo;
                }

                if(!_.isUndefined(fieldName)) {
                  fieldValue = (!_.isUndefined(attr[fieldName])) ? attr[fieldName] : '';
                }

                if(dot(fieldName, true)) {
                  var dotField = dot(fieldName);
                  fieldValue = attr[dotField[0]][dotField[1]];
                }

                if(arg(fieldName, true)) {
                  var filteredList = arg(fieldName);
                  fieldValue = filteredList;
                }

                selected[fieldAlias] = fieldValue;
            }
            return selected;
          }

          // Split it, if the statement is String.
          var fieldsList = (_.isString(statement)) ? statement.split(',') : statement,
              isFieldsArray = (_.isArray(fieldsList)) ? true : false,
              isFieldsObject = (_.isObject(fieldsList)) ? true : false,
              isIterable = (isFieldsArray || isFieldsArray) ? true : false;

          // Check If Attribute is Array.
          if(!isAttrStack) {
            if(isIterable) {
              selected = getFields(fieldsList, attr);
            }
          }

          return selected;
        }
    });
})(_, Backbone);
